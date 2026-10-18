# UPSC Previous Year Questions (PYQ) Upload Folder

Drop your question papers, text files, CSV, JSON, or PDFs in this folder (`raw_pyq_data/`).

---

## 📂 Supported Formats

### 1. JSON Format (Recommended for bulk sets)
Name your file: `2024_gs.json`, `2024_csat.json`, `2023_gs.json`, etc.
```json
[
  {
    "id": "pyq-2024-gs-01",
    "subject": "polity",
    "topic": "Fundamental Rights",
    "subTopic": "Right to Privacy",
    "question": "Which of the following statements is/are correct regarding...",
    "options": [
      "1 only",
      "2 only",
      "Both 1 and 2",
      "Neither 1 nor 2"
    ],
    "correctAnswer": 2,
    "explanation": "Both statements are correct because...",
    "bookReference": {
      "bookName": "Indian Polity by M. Laxmikanth",
      "chapter": "Chapter 7: Fundamental Rights",
      "pageNumber": "Page 7.15"
    },
    "eliminationTip": "Statement 2 is factually consistent...",
    "difficulty": "UPSC Standard",
    "pyqYear": 2024,
    "pyqPaper": "GS"
  }
]
```

### 2. CSV Format
Name your file: `2024_gs.csv` or `2023_csat.csv`
Columns:
`question,option_a,option_b,option_c,option_d,correct_answer,explanation,book_name,chapter,page_number,year,paper,subject`

### 3. Raw Text / Markdown Format
If you have raw text files (e.g. copied from official PDFs or answer keys), save them as `.txt` or `.md`:
```text
Q1. Consider the following statements:
1. Statement one...
2. Statement two...
Which of the statements given above is/are correct?
(a) 1 only
(b) 2 only
(c) Both 1 and 2
(d) Neither 1 nor 2
Answer: (c)
Explanation: Detailed explanation...
Reference: M. Laxmikanth, Chapter 7
```

---

## 🚀 Running the Automated Importer
Once you put your files in this folder, simply tell me:
**"I have added the files, please import them"** 
I will run the automated parser script to load all questions into the official vault!
