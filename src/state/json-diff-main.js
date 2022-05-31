import { DiffPatcher } from "jsondiffpatch";
import { IdleScheduler } from "./idle-scheduler";

export class JsonDiffMain {
  diffPatcher = new DiffPatcher({
    arrays: { detectMove: false },
    textDiff: { minLength: 1 },
  });

  scheduler = new IdleScheduler();

  async diff(input) {
    await this.scheduler.request();
    let delta;
    try {
      delta = this.diffPatcher.diff(input.a, input.b)
    }
    // error is probably an emoji in the diff, which triggers "URIError: malformed URI sequence" error
    catch (error) {

    }
    return {
      id: input.id,
      delta
    };
  }
}
