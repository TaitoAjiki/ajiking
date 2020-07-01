<template>
  <v-container>
    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i" cols="12">
        <v-card :color="item.color" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>

              <v-card-text>{{ item.answer }}</v-card-text>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="item.src"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Contents extends Vue {
  items = [
    {
      color: "#F06292",
      src:
        "https://img.cdn.nimg.jp/s/nicovideo/thumbnails/36465713/36465713.12201316.original/r1280x720l?key=72aa8c2dbff1c9572435d866f921575ad8079cdd5142bd2353523bd5832936d3",
      title: "自己紹介",
      answer: "私の名前はあじきたいと。現在は20才。"
    },
    {
      color: "#BA68C8",
      src:
        "https://img.cdn.nimg.jp/s/nicovideo/thumbnails/36502410/36502410.79997371.original/r1280x720l?key=63f580d8b8f56c8edf50e53e1c991ad8993b92a90b00f4671bcf7c0f058d8bec",
      title: "趣味とハマっていること",
      answer: "神社巡りとインスタグラムライブをすること。"
    },
    {
      color: "#64B5F6",
      src:
        "https://img.cdn.nimg.jp/s/nicovideo/thumbnails/36497456/36497456.38566747.original/r1280x720l?key=7a2ebe5e6a04fd1f4d552e2cf1f62c9db3bd0634dd1ead19135d085bc61ab68c",
      title: "行ってみたいところ",
      answer: "ペルーに行ってマチュピチュの遺跡を一回みてみたい"
    },
    {
      color: "#AED581",
      src: "https://i.ytimg.com/vi/E5UZx7cnRXM/maxresdefault.jpg",
      title: "恋愛事情は？",
      answer: "言うほどのことはない。"
    }
  ];
}
</script>
