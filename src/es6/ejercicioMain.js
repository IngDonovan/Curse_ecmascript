
import {getData} from "./ejercicioExpo.js";

export function solution() {
   return getData().then(res => res);
  }
solution();