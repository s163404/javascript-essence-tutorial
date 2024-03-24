// moduleBをESModule形式で記述
import { publicFn as fn, publicVal as val } from "./moduleA";
fn();
fn();
fn();
console.log(val);