<template>
  <footer class="max-w-2xl mx-auto px-5 md:px-10 py-8 text-theme-text-tertiary flex flex-wrap justify-between items-center">
    <div>
      &copy; KAPU.one | {{ year }}. All rights reserved
    </div>
    <div>
      <a href="https://www.facebook.com/kapucoin" target="_blank" title="Facebook">
        <i class="fab fa-facebook m-2" />
      </a>

      <a href="https://twitter.com/kapucoin" target="_blank" title="Twitter">
        <i class="fab fa-twitter m-2" />
      </a>

      <a href="https://forum.kapu.one" target="_blank" title="Forum">
        <i class="fas fa-comments m-2" />
      </a>

      <a href="https://blog.kapu.one" target="_blank" title="Blog">
        <i class="fab fa-medium m-2" />
      </a>

      <a href="http://t.me/joinchat/AAAAAESLKrQ7JEY_n-RDKQ" target="_blank" title="Telegram">
        <i class="fab fa-telegram m-2" />
      </a>

      <a href="https://www.reddit.com/r/kapucoin" target="_blank" title="Reddit">
        <i class="fab fa-reddit m-2" />
      </a>

      <a href="https://www.github.com/kapucoin" target="_blank" title="GitHub">
        <i class="fab fa-github m-2" />
      </a>

      <a href="https://bitcointalk.org/index.php?topic=2035561.0" target="_blank" title="Bitcointalk">
        <i class="fab fa-btc m-2" />
      </a>

      <a href="https://slack.kapu.one/" target="_blank" title="Slack">
        <i class="fab fa-slack m-2" />
      </a>

      <a href="https://discord.gg/ZyP9uF" target="_blank" title="Discord">
        <i class="fab fa-discord m-2" />
      </a>
    </div>
  </footer>
</template>

<script type="text/ecmascript-6">
import moment from "moment";

export default {
  computed: {
    year() {
      return moment().format("Y");
    }
  }
};
</script>
