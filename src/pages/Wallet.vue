<template>
  <div class="max-w-2xl mx-auto md:pt-5">
    <content-header>{{ $t("Wallet summary") }}</content-header>

    <wallet-details :wallet="wallet"></wallet-details>

    <section class="page-section mb-5" :class="{ 'py-5 md:py-10': isDelegate }" v-show="isDelegate">
      <div class="px-5 sm:px-10">
        <delegate :wallet="wallet" v-show="isDelegate" v-on:username="username = $event"></delegate>
        <voters :wallet="wallet" :username="username" v-show="isDelegate"></voters>
      </div>
    </section>

    <transactions :wallet="wallet" v-if="wallet"></transactions>
  </div>
</template>

<script type="text/ecmascript-6">
import WalletDetails from '@/components/wallet/Details'
import Delegate from '@/components/wallet/Delegate'
import Voters from '@/components/wallet/Voters'
import Transactions from '@/components/wallet/Transactions'
import WalletService from '@/services/wallet'

export default {
  components: {
    WalletDetails,
    Delegate,
    Voters,
    Transactions,
  },

  data: () => ({
    wallet: {},
    activeTab: 'all',
    isVoting: false,
    username: ''
  }),

  computed: {
    isDelegate() {
      return this.isDelegateByAddress(this.$route.params.address)
    },
  },

  async beforeRouteEnter(to, from, next) {
    try {
      const response = await WalletService.find(to.params.address)
      next(vm => vm.setWallet(response))
    } catch(e) { next({ name: '404' }) }
  },

  async beforeRouteUpdate(to, from, next) {
    this.wallet = {}

    try {
      const response = await WalletService.find(to.params.address)
      this.setWallet(response)
      next()
    } catch(e) { next({ name: '404' }) }
  },

  methods: {
    async setWallet(wallet) {
      this.wallet = wallet

      try {
        const vote = await WalletService.vote(wallet.address)
        this.isVoting = vote
      } catch(e) {
        console.log(e.message || e.data.error)
        this.isVoting = false
      }
    },
  },
}
</script>
