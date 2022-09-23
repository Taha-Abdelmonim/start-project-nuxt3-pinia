import { defineStore } from "pinia";
import axios from "axios";

export const useAllData = defineStore("useAllData", {
  state: () => {
    const { baseURL } = useRuntimeConfig().public;
    return {
      activities: [],
      sliders: [],
      events: [],
      DataActivitie: false,
      baseURL,
    };
  },
  getters: {
    // doubleCount: (state) => state.counter * 2,
    // sexCount: (state) => state.counter * 6,
  },
  actions: {
    async getAllDataApi(apiName) {
      await axios.get(`${this.baseURL}defaults`).then((res) => {
        if (apiName === "activities") {
          this.activities = res.data.activities;
        }
        if (apiName === "sliders") {
          this.sliders = res.data.sliders;
        }
        if (apiName === "events") {
          this.events = res.data.events;
        }
      });
    },
  },
});
