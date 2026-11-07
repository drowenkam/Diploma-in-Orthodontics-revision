# Validation — 7 November 2026

## Findings and repairs
The previous compact website was a reader: it had no SBA answer-entry, marking or question-progress system. Reading-page percentage was not answered-question progress. This update adds a separate question-practice interface without removing the four-volume reader or PDFs.

Corrected answer-grid and mark-sheet destinations, and question-block menu destinations, in Volumes III and IV. Improved handling of reader load errors, stale asynchronous responses and unavailable storage. The final reading page has a Return to library action.

## Source checks
| Bank | SBA | True/false | Questions | Maximum marks | Explanation/grid key matches |
|---|---:|---:|---:|---:|---:|
| Volume III | 1016 | 0 | 1016 | 1016 | 1016 |
| Volume IV | 768 | 255 | 1023 | 2043 | 1023 |

All questions have five options/statements, a source question page, explanation and answer page. Question numbers are complete and unique within each bank. Keys were independently extracted from the explanation sections and answer grids and matched for every question. The four source PDFs remain byte-for-byte unchanged. Source text was not independently clinically reviewed.

## Automated checks passed
- 17,235 scoring/set checks: every SBA option for every SBA; all 32 true/false response patterns for every true/false question; all nonempty block/type selections.
- Correct, incorrect, incomplete and missing answers; duplicate-submit rejection; locked submitted responses; drafts earn no score.
- All-correct and all-wrong totals; valid saved-answer round trip; invalid saved choices discarded; full completion and next-unanswered termination.
- Empty, malformed, blocked-storage and restored sessions; resumed index bounds; reset cancellation and reset; invalid jump bounds; return to set selection.
- Reader rendering, PDF links, bookmarks, search and final-page controls.
- Script syntax; local asset references; source-page bounds; upload file count and individual sizes.

## Browser checks passed
- Blank SBA submission is rejected.
- One correct and one incorrect SBA produce 1/2 marks, 50% submitted accuracy, 2/25 completion and 23 unanswered.
- Reload/resume preserves choices, locked answers, score and question position.
- Incomplete true/false submission is rejected; three correct statements produce 3/5 marks and 60% accuracy.
- A six-question true/false set reaches 6/6 completion and 17/30 marks for the test responses, matching the keys.
- Last-question navigation reaches results; no unanswered questions returns to review; empty review filter provides exits; cancelling restart preserves results.

## Limits
Checks apply to the generated package and a local Chromium preview, not the user's deployed GitHub URL. Physical iPhone/iPad and Safari testing were unavailable. Mobile layouts use responsive CSS and standard native form controls. Scores follow the supplied answer keys, not an independent medical evidence audit. Browser progress is per device and per selected set; it does not sync. Backup export is a JSON record, with no import UI in this release.
