<template>
  <common-card title="Mebers">
    <div style="width: 100%">
      <div style="overflow: auto; height: 120px; margin: auto; width: 90%">
        <div
          class="mebers-line"
          v-for="(member, index) of members"
          :key="member.name + index"
        >
          <i
            class="el-icon-user-solid"
            :style="{ color: membericonColor(member.level) }"
          ></i>
          <div class="meber-name">{{ member.name }}</div>
          <div class="meber-level">{{ member.level }}</div>
        </div>
      </div>
      <div style="margin-left: 65%; margin-top: 10px; width: 40%">
        <el-button type="text" size="mini" style="width: 20%; margin-right: 20%"
          >+ 添加新成员</el-button
        >
        <el-button type="text" size="mini" style="width: 20%"
          >查看所有成员</el-button
        >
      </div>
    </div>
  </common-card>
</template>

<script>
import CommonCard from "@/components/CommonCard";
import axios from "axios";
import {getmembers} from '@/api/overviewpage.js'

export default {
  components: {
    CommonCard,
  },
  data() {
    return {
      members:[]
      // members: [
      //   {
      //     name: "Minnie Chen 陳斯琳",
      //     level: "PM",
      //   },
      //   {
      //     name: "Jean Liang 梁傑",
      //     level: "Tech Lead",
      //   },
      //   {
      //     name: "Ricky Liu 劉智凱",
      //     level: "Coordinator",
      //   },
      //   {
      //     name: "XXXX",
      //     level: "Member",
      //   },
      // ],
    };
  },
  methods: {
    membericonColor(level) {
      switch (level) {
        case "PM":
          return "rgb(191, 64, 145)";
        case "Tech Lead":
          return "rgb(26, 103, 163)";
        case "Coordinator":
          return "rgb(153, 221, 85)";
        case "Member":
          return "rgb(204, 204, 204)";
        default:
          return "rgb(204, 204, 204)";
      }
    },
    getmembers() {
      //setTimeout(()=>{},1000)
      getmembers().then(
        response=>{
          this.members=response.data
        },
        error=>{
          console.log("error",error)
          this.members=[]
        }
      )
    },
    // async getmembers2(){
    //   let members=await axios({
    //     url: "http://[::1]:3000/members",
    //     params: {
    //       filter: {},
    //     },
    //   })
    //   return members
    // }
  },
  mounted(){
    getmembers().then(success=>{

      this.members=success?.data
    },err=>{

      this.members=[]
    })
  }
};
</script>

<style>
.mebers-line {
  height: 30px;
  margin-bottom: 10px;
  overflow: hidden;
  /* border:1px solid red; */
}

.mebers-line * {
  display: inline-block;
  vertical-align: middle;
}

.meber-name {
  margin: 0 9% 0 7%;
  width: 56%;
  /* border: 1px solid red; */
  overflow: hidden;
  height: 25px;
  line-height: 25px;
}

.meber-level {
  width: 22%;
  font-size: 14px;
  border: 1px solid rgb(23, 90, 142);
  border-radius: 2px;
  color: rgb(23, 90, 142);
  height: 25px;
  line-height: 25px;
  text-align: center;
  overflow: hidden;
}
</style>