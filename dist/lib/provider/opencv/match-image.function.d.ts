import * as cv from "opencv4nodejs";
import { MatchResult } from "../../match-result.class";
export declare function matchImages(haystack: cv.Mat, needle: cv.Mat): Promise<MatchResult>;
