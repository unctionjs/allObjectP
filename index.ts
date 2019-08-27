import allP from "@unction/allp";
import thenP from "@unction/thenp";
import keys from "@unction/keys";
import values from "@unction/values";
import zip from "@unction/zip";
import pipe from "@unction/pipe";
import fromArrayToObject from "@unction/fromarraytoobject";
import {StringObjectType} from "./types";

export default function allObjectP (record: StringObjectType<unknown>): Promise<StringObjectType<unknown>> {
  return thenP(pipe([zip(keys(record)), fromArrayToObject]))(allP(values(record)));
}
