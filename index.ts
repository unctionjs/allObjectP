import allP from "@unction/allp";
import thenP from "@unction/thenp";
import keys from "@unction/keys";
import values from "@unction/values";
import zip from "@unction/zip";
import pipe from "@unction/pipe";
import fromArrayToObject from "@unction/fromarraytoobject";
import {StringObjectType} from "./types";

export default function allObjectP<T> (record: StringObjectType<T>): Promise<StringObjectType<T>> {
  return thenP(pipe([zip(keys(record)), fromArrayToObject]))(allP(values(record)));
}
