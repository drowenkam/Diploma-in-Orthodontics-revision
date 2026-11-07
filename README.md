# Orthodontics — Compact GitHub Pages edition

## Upload this version
1. Extract the ZIP into a new empty folder. Do not mix it with earlier downloads.
2. Open the extracted Orthodontics_GitHub_Pages folder. It contains the reading interface, quiz.html, quiz.js, quiz-engine.js, quiz.css, data/ and pdfs/, plus setup and validation notes. Upload every file and both subfolders.
3. In your repository root select Add file → Upload files.
4. Drag the CONTENTS into the upload area, including the data and pdfs folders. Do not upload the ZIP or the outer folder. Do not upload earlier pages or page-packs folders.
5. Commit changes. Matching files from an older version should be replaced, especially app.js and index.html. Old pages/page-packs folders already committed are unused and can remain.
6. Settings → Pages → Deploy from a branch → main → / (root) → Save.
7. Open the published website in Safari on iPhone/iPad. You can add it to your home screen.

If an upload still fails, upload the top-level files first and commit, then drag data/ and commit, then pdfs/ and commit. Always start from the repository root so each folder retains its correct name.

## Retained features
All 1,203 pages of extracted HTML text, search within each volume, chapter navigation, adjustable text, dark mode, bookmarks and saved reading position. All four original PDFs are included unchanged.

## Compact edition difference
The large page-image collection has been removed. Tap Original PDF to view diagrams, tables and the exact source layout. Some PDF viewers ignore the page link; manually navigate to the PDF page number shown in the HTML reader if needed. HTML text is automatically extracted and does not preserve complex diagram/table relationships. Clinical content and source dates have not been updated or independently reviewed.

Bookmarks and progress are saved per browser and do not sync across devices. Internet access is required for reliable use. The question banks now have an interactive practice mode. Select Start SBA / true-false practice on the home page.

Official setup: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Interactive question practice — November 2026 update
- Open index.html, then Start SBA / true-false practice, or open quiz.html directly.
- Volume III: 1,016 SBAs, 1,016 marks. Volume IV: 768 SBAs and 255 true/false questions, 2,043 marks.
- Select a bank, block and question type. Start / resume reopens that set's current attempt. Each bank/block/type combination has separate progress; answering a question in one set does not mark it answered in a different set.
- Selecting an answer saves a draft. Submit answer marks it and locks it for that attempt. True/false questions require all five statements before submission.
- Completion = submitted questions / questions in the set. Submitted accuracy = marks earned / marks available on submitted questions. Full-set score includes unanswered questions in the denominator. No negative marking.
- Previous/Next, question number plus Go, and Next unanswered allow free navigation. The last question leads to Results. Results can also be opened early without losing answers.
- Review filters show correct, incorrect/partly correct, or unanswered questions. New attempt clears only the selected set after a confirmation. Download progress backup exports a JSON record for safekeeping; this version does not provide a backup import screen.
- Saved answers and reading bookmarks remain on this browser only. Do not clear browser data if you want to retain them. If saving fails, a visible warning appears. Use one active practice tab to avoid conflicting edits.
- Existing reading bookmarks use the same storage keys as before. The earlier reader did not record SBA answers or scores, so there are no earlier quiz answers to migrate.

## Updating an existing repository
Extract this ZIP into a fresh folder. Upload its CONTENTS to the existing repository root and replace matching files. Include the new quiz files and both new data/quiz-3.js and data/quiz-4.js files. Old pages/ and page-packs/ files are unused. Browser assets have versioned links to reduce stale-code issues. After GitHub finishes publishing, reload the website. If it still shows the old interface, close and reopen the website; do not clear browser storage just to refresh code.

See VALIDATION.md for checks and limitations. No changes have been pushed to your live repository by this package creation.
