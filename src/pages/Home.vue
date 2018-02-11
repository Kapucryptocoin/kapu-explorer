<template>
  <div class="max-w-2xl mx-auto md:pt-5">
    <content-header>Latest transactions and blocks</content-header>

    <section v-if="shouldDisplayChart" class="hidden md:block mb-5 bg-theme-feature-background xl:rounded-lg">
      <chart-wrapper></chart-wrapper>
    </section>

    <section class="page-section py-5 md:py-10">
      <nav class="mx-5 sm:mx-10 mb-8 border-b flex items-end">
        <div
          @click="dataView = 'transactions'"
          :class="[
            dataView === 'transactions' ? 'text-lg sm:text-2xl border-brown text-theme-text-primary' : 'sm:text-lg text-theme-text-secondary border-transparent',
            'mr-4 py-4 px-2 cursor-pointer border-b-3 hover:text-theme-primary hover:border-brown'
          ]">
          Latest Transactions
        </div>
        <div
          @click="dataView = 'blocks'"
          :class="[
            dataView === 'blocks' ? 'text-lg sm:text-2xl border-brown text-theme-text-primary' : 'sm:text-lg text-theme-text-secondary border-transparent',
            'mr-4 py-4 px-2 cursor-pointer border-b-3 hover:text-theme-text-primary hover:border-brown'
          ]">
          Latest Blocks
        </div>
      </nav>

      <latest-transactions v-if="dataView === 'transactions'"></latest-transactions>

      <latest-blocks v-if="dataView === 'blocks'"></latest-blocks>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
import ChartWrapper from '@/components/ChartWrapper'
import LatestTransactions from '@/components/home/LatestTransactions'
import LatestBlocks from '@/components/home/LatestBlocks'
import { mapGetters } from 'vuex'

export default {
  components: {
    ChartWrapper,
    LatestTransactions,
    LatestBlocks,
  },

  data: () => ({
    dataView: 'transactions',
  }),

  computed: {
    ...mapGetters('network', { networkDefaults: 'defaults' }),
    ...mapGetters('ui', ['priceChart']),
    shouldDisplayChart() {
      return this.$route.name === 'home' && this.networkDefaults.config.priceChart
    },
  },
}
</script>
