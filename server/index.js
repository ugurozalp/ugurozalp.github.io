const fs = require('fs');
const request = require('request');
const path = require('path');
const Vue = require('vue');
const VueTimeago = require('vue-timeago');
const renderer = require('vue-server-renderer').createRenderer();

Vue.use(VueTimeago, {
  name: 'timeago',
  locale: 'tr-TR',
  locales: {
    'tr-TR': require('vue-timeago/locales/tr-TR.json')
  }
});

const YouTubeVideo = {
  props: {
    video: {
      type: Object,
      required: true,
    },
  },
  computed: {
    snippet() {
      return this.video.snippet;
    },
    videoUrl() {
      return `https://www.youtube.com/watch?v=${this.video.id.videoId}`;
    },
  },
  template: `
    <div class="video">
      <img :src="snippet.thumbnails.medium.url" width="196" />
      <div class="meta">
        <h2><a :href="videoUrl" target="_blank">{{snippet.title}}</a></h2>
        <timeago :since="snippet.publishedAt" />
        <article>{{snippet.description}}</article>
      </div>
    </div>
  `
};

const vueOptions = {
  data: {
    videos: [],
  },
  components: {
    'yt-video': YouTubeVideo,
  },
  template: `
    <section>
      <yt-video
        v-if="videos.length"
        v-for="video in videos"
        :video="video"
        key="video.id.videoId" />
    </section>
  `
};


const url = `https://www.googleapis.com/youtube/v3/search?key=${process.env.YT_API_KEY}&channelId=${process.env.YT_CHANNEL_ID}&part=snippet,id&order=date&maxResults=50&type=video`;
request(url, (err, res, body) => {
  if (err) throw err;

  vueOptions.data.videos = JSON.parse(body).items;
  const app = new Vue(vueOptions);

  renderer.renderToString(app, (err, html) => {
    if (err) throw err;

    fs.writeFileSync(`${__dirname}/../themes/flexy/layout/_videos.html`, html);
  });
});
