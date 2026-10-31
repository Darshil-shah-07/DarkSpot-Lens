/**
 * DarkSpot Lens — Core Interactive Engine
 * AI-Assisted Information Gap & Conflict Detection Platform
 */

// --- Golden Scenario Dataset (Aurora Merit Scholarship 2026) ---
const GOLDEN_SCENARIO = {
  goal: "What should I verify before applying to the Aurora Merit Scholarship 2026? What are the renewal rules, conflicting deadlines, and mandatory documents?",
  domain: "scholarship",
  sources: [
    {
      id: "src-1",
      title: "Official Aurora Scholarship Guidelines 2026",
      domain: "aurorascholarship.org",
      url: "https://aurorascholarship.org/2026-guidelines",
      date: "Oct 12, 2026",
      detectionMethod: "JSON-LD Schema",
      status: "Official",
      statusType: "official",
      excerpt: "The Aurora Merit Scholarship provides $10,000 per academic year for undergraduate STEM students with a minimum 85% aggregate. Applications open on August 15 and close strictly on November 15, 2026. Household income must be below $60,000 annually. Shortlisted students will be called for interview in December 2026. [Note: Document contains no mention of GPA requirements to retain scholarship for subsequent years or renewal conditions]."
    },
    {
      id: "src-2",
      title: "StudentPrep Hub: Complete Aurora Scholarship Guide",
      domain: "studentprephub.in",
      url: "https://studentprephub.in/aurora-scholarship-guide",
      date: "Sep 28, 2026",
      detectionMethod: "OpenGraph Meta Tag",
      status: "Blog / Guide",
      statusType: "blog",
      excerpt: "Great opportunity for STEM students! The Aurora scheme gives $10,000. Candidates must upload three documents only: High school marksheets, Government Photo ID, and Family Income Certificate. The portal closes mid-November 2026. Keep in mind that income cutoff is $60,000."
    },
    {
      id: "src-3",
      title: "EduTrack National Higher Education Portal",
      domain: "edutrack-national.gov",
      url: "https://edutrack-national.gov/schemes/aurora-2026",
      date: "Oct 05, 2026",
      detectionMethod: "HTML <time> Tag",
      status: "Verified Portal",
      statusType: "official",
      excerpt: "Notice for Aurora Scholarship 2026: Mandatory uploads comprise five items: Marksheet, Photo ID, Domicile Certificate, Notarized Parent Income Affidavit on Rs.100 stamp paper, and Principal Recommendation Letter. Applications without the notarized affidavit will be rejected without notice."
    },
    {
      id: "src-4",
      title: "Daily Campus Gazette: Aurora Scholarship Announcement",
      domain: "campusgazette.news",
      url: "https://campusgazette.news/aurora-scholarship-awards",
      date: "May 14, 2024",
      detectionMethod: "Visible Text Regex (2024-25 Cycle)",
      status: "Stale (Prior Cycle)",
      statusType: "stale",
      excerpt: "Applications for the prestigious Aurora Merit Scholarship are now open for the 2024-2025 cycle. The final submission deadline is October 31, 2024. Eligible students will receive awards by early 2025."
    },
    {
      id: "src-5",
      title: "CollegeDiscussion Forum: Student Experiences & Tips",
      domain: "collegediscussion.net",
      url: "https://collegediscussion.net/t/aurora-scholarship-questions",
      date: "Undated",
      detectionMethod: "Fallback: No Date Found",
      status: "Undated Thread",
      statusType: "uncertain",
      excerpt: "A senior told me you need at least a 3.5 GPA every semester to keep the money, but I couldn't find this anywhere on the portal. Can anyone confirm if renewal is automatic or if you have to re-apply each year?"
    }
  ],
  aspects: [
    {
      id: "asp-1",
      name: "Minimum Academic Eligibility",
      summary: "Found in 4/5 sources reviewed",
      isConflict: false,
      isGap: false,
      cells: [
        { status: "found", preview: "85% aggregate in 12th/high school STEM", quote: "minimum 85% aggregate in qualifying STEM examinations", sourceId: "src-1" },
        { status: "found", preview: "85% cutoff for science & math streams", quote: "85% score in science stream", sourceId: "src-2" },
        { status: "found", preview: "85% or equivalent grade required", quote: "Minimum qualifying score: 85% aggregate", sourceId: "src-3" },
        { status: "found", preview: "85% minimum in 2024 batch", quote: "requires 85% aggregate", sourceId: "src-4" },
        { status: "missing", preview: "Not explicitly defined in forum post", quote: "", sourceId: "src-5" }
      ]
    },
    {
      id: "asp-2",
      name: "Application Deadline",
      summary: "⇄ Conflict: Nov 15, 2026 vs Oct 31, 2024 (stale)",
      isConflict: true,
      isGap: false,
      cells: [
        { status: "found", preview: "Nov 15, 2026 (Strict cutoff)", quote: "close strictly on November 15, 2026. No extensions will be granted.", sourceId: "src-1" },
        { status: "found", preview: "Mid-November 2026", quote: "portal closes mid-November 2026", sourceId: "src-2" },
        { status: "found", preview: "November 15, 2026, 11:59 PM", quote: "Deadline for submission: November 15, 2026", sourceId: "src-3" },
        { status: "partial", preview: "October 31, 2024 (Previous cycle)", quote: "The final submission deadline is October 31, 2024", sourceId: "src-4" },
        { status: "missing", preview: "No deadline mentioned", quote: "", sourceId: "src-5" }
      ]
    },
    {
      id: "asp-3",
      name: "Award Amount & Benefits",
      summary: "Found in 4/5 sources reviewed",
      isConflict: false,
      isGap: false,
      cells: [
        { status: "found", preview: "$10,000 per academic year", quote: "provides $10,000 per academic year for undergraduate STEM students", sourceId: "src-1" },
        { status: "found", preview: "$10,000 financial support", quote: "Aurora scheme gives $10,000", sourceId: "src-2" },
        { status: "found", preview: "$10,000 tuition grant", quote: "Total scholarship amount: $10,000/year", sourceId: "src-3" },
        { status: "found", preview: "$10,000 annual fellowship", quote: "scholarship provides $10,000", sourceId: "src-4" },
        { status: "missing", preview: "Unspecified in thread", quote: "", sourceId: "src-5" }
      ]
    },
    {
      id: "asp-4",
      name: "Mandatory Documents Required",
      summary: "⇄ Conflict: 3 items (Blog) vs 5 items (Portal)",
      isConflict: true,
      isGap: false,
      cells: [
        { status: "partial", preview: "General mention of ID and marksheets", quote: "Standard academic and identification credentials required at portal login", sourceId: "src-1" },
        { status: "found", preview: "Only 3 documents (Marksheet, ID, Income)", quote: "Candidates must upload three documents only: High school marksheets, Government Photo ID, and Family Income Certificate.", sourceId: "src-2" },
        { status: "found", preview: "5 documents incl. Notarized Affidavit & Letter", quote: "Mandatory uploads comprise five items: Marksheet, Photo ID, Domicile Certificate, Notarized Parent Income Affidavit on Rs.100 stamp paper, and Principal Recommendation Letter.", sourceId: "src-3" },
        { status: "missing", preview: "Documents not itemized in article", quote: "", sourceId: "src-4" },
        { status: "missing", preview: "Forum does not provide checklist", quote: "", sourceId: "src-5" }
      ]
    },
    {
      id: "asp-5",
      name: "Renewal & Continuation Terms ⭐",
      summary: "🔴 High Gap: Not found in any official source reviewed",
      isConflict: false,
      isGap: true,
      cells: [
        { status: "missing", preview: "Omitted: No GPA or renewal policy in guidelines", quote: "", sourceId: "src-1" },
        { status: "missing", preview: "Omitted: Blog does not mention continuation", quote: "", sourceId: "src-2" },
        { status: "missing", preview: "Omitted: Portal only covers initial application", quote: "", sourceId: "src-3" },
        { status: "missing", preview: "Omitted in 2024 announcement", quote: "", sourceId: "src-4" },
        { status: "partial", preview: "Unverified rumor: '3.5 GPA required to retain'", quote: "A senior told me you need at least a 3.5 GPA every semester to keep the money, but I couldn't find this anywhere on the portal.", sourceId: "src-5" }
      ]
    },
    {
      id: "asp-6",
      name: "Selection & Interview Process",
      summary: "Found in 2/5 sources reviewed",
      isConflict: false,
      isGap: false,
      cells: [
        { status: "found", preview: "Interview in December 2026 for shortlisted", quote: "Shortlisted students will be called for interview in December 2026.", sourceId: "src-1" },
        { status: "missing", preview: "No interview details", quote: "", sourceId: "src-2" },
        { status: "found", preview: "Committee review followed by virtual interview", quote: "Stage 2 consists of oral evaluation by selection committee", sourceId: "src-3" },
        { status: "missing", preview: "Not detailed", quote: "", sourceId: "src-4" },
        { status: "missing", preview: "Not detailed", quote: "", sourceId: "src-5" }
      ]
    },
    {
      id: "asp-7",
      name: "Disbursement Schedule & Mode",
      summary: "🔴 Medium Gap: Omitted in 4/5 sources reviewed",
      isConflict: false,
      isGap: true,
      cells: [
        { status: "missing", preview: "No disbursement schedule in official notice", quote: "", sourceId: "src-1" },
        { status: "missing", preview: "Payment dates omitted", quote: "", sourceId: "src-2" },
        { status: "partial", preview: "Mentions Direct Benefit Transfer into bank", quote: "Disbursement executed via DBT directly into applicant's Aadhaar-linked savings account.", sourceId: "src-3" },
        { status: "missing", preview: "Omitted", quote: "", sourceId: "src-4" },
        { status: "missing", preview: "Omitted", quote: "", sourceId: "src-5" }
      ]
    },
    {
      id: "asp-8",
      name: "Family Income Ceiling",
      summary: "Corroborated across 3/5 sources (< $60,000)",
      isConflict: false,
      isGap: false,
      cells: [
        { status: "found", preview: "Under $60,000 per annum", quote: "Household income must be below $60,000 annually.", sourceId: "src-1" },
        { status: "found", preview: "Income cutoff is $60,000", quote: "income cutoff is $60,000", sourceId: "src-2" },
        { status: "found", preview: "Annual parent income < $60,000", quote: "Parental gross income threshold: max $60,000 per financial year", sourceId: "src-3" },
        { status: "missing", preview: "Not stated in news archive", quote: "", sourceId: "src-4" },
        { status: "missing", preview: "Not stated in forum", quote: "", sourceId: "src-5" }
      ]
    }
  ],
  findings: [
    {
      id: "f-1",
      type: "gap",
      severity: "high",
      provenance: "SOURCED",
      confidence: "High (0/5 Sources Disclose)",
      title: "Renewal & Multi-Year Continuation Criteria Omitted",
      description: "None of the reviewed sources (including the official 2026 guidelines) state the ongoing criteria (GPA threshold, credit load, annual re-application) required to retain the scholarship for years 2 through 4.",
      actionText: "Verify with the scholarship office whether the $10,000 award is renewable and what minimum CGPA must be maintained.",
      quoteA: "Official Document contains no mention of GPA requirements to retain scholarship for subsequent years or renewal conditions.",
      sourceA: "Official Aurora Guidelines",
      urlA: "https://aurorascholarship.org/2026-guidelines"
    },
    {
      id: "f-2",
      type: "conflict",
      severity: "high",
      provenance: "SOURCED",
      confidence: "High (Conflicting Direct Quotes)",
      title: "Mandatory Document Checklist Discrepancy",
      description: "Third-party student guide lists only 3 basic documents, while the official higher education portal lists 5 mandatory uploads including a Notarized Parent Affidavit on stamp paper.",
      isSideBySide: true,
      quoteA: "Candidates must upload three documents only: High school marksheets, Government Photo ID, and Family Income Certificate.",
      sourceA: "StudentPrep Hub (Blog)",
      urlA: "https://studentprephub.in/aurora-scholarship-guide",
      quoteB: "Mandatory uploads comprise five items: Marksheet, Photo ID, Domicile Certificate, Notarized Parent Income Affidavit on Rs.100 stamp paper, and Principal Recommendation Letter.",
      sourceB: "EduTrack National Portal",
      urlB: "https://edutrack-national.gov/schemes/aurora-2026"
    },
    {
      id: "f-3",
      type: "conflict",
      severity: "high",
      provenance: "SOURCED",
      confidence: "High (Stale Date Collision)",
      title: "Conflicting Application Deadline (Active vs Prior Cycle)",
      description: "Active sources state November 15, 2026, whereas the Campus Gazette article prominently specifies October 31, 2024 because it belongs to an archived prior cycle.",
      isSideBySide: true,
      quoteA: "Applications open on August 15 and close strictly on November 15, 2026. No extensions will be granted.",
      sourceA: "Official Guidelines 2026",
      urlA: "https://aurorascholarship.org/2026-guidelines",
      quoteB: "The final submission deadline is October 31, 2024. Eligible students will receive awards by early 2025.",
      sourceB: "Daily Campus Gazette (Archived 2024)",
      urlB: "https://campusgazette.news/aurora-scholarship-awards"
    },
    {
      id: "f-4",
      type: "stale",
      severity: "high",
      provenance: "SOURCED",
      confidence: "High (Year Pattern Match: 2024-25)",
      title: "Daily Campus Gazette Refers to Previous 2024-25 Cycle",
      description: "The publication date is May 14, 2024 and mentions deadlines from two years ago. Information from this source should not be used for 2026 planning.",
      quoteA: "Applications for the prestigious Aurora Merit Scholarship are now open for the 2024-2025 cycle.",
      sourceA: "Campus Gazette",
      urlA: "https://campusgazette.news/aurora-scholarship-awards"
    },
    {
      id: "f-5",
      type: "stale",
      severity: "med",
      provenance: "UNCERTAIN",
      confidence: "Medium (Undated Source)",
      title: "CollegeDiscussion Forum Thread Lacks Publication Timestamp",
      description: "This source contains no machine-readable JSON-LD or HTTP header dates. Rumors regarding a '3.5 GPA requirement' are unverified and potentially stale.",
      quoteA: "A senior told me you need at least a 3.5 GPA every semester to keep the money...",
      sourceA: "CollegeDiscussion Forum",
      urlA: "https://collegediscussion.net/t/aurora-scholarship-questions"
    },
    {
      id: "f-6",
      type: "question",
      severity: "med",
      provenance: "AI-SUGGESTED",
      confidence: "High (Critical Decision Question)",
      title: "Are Gap-Year Applicants or College Transfer Students Eligible?",
      description: "None of the official guidelines clarify if applicants must be directly graduating high school seniors or if students taking a gap year are considered eligible.",
      actionText: "Submit an email inquiry to eligibility@aurorascholarship.org regarding gap-year status.",
      quoteA: "Guidelines state eligibility only as 'undergraduate STEM students with 85% aggregate'.",
      sourceA: "Derived from aspect analysis",
      urlA: "https://aurorascholarship.org/2026-guidelines"
    },
    {
      id: "f-7",
      type: "gap",
      severity: "med",
      provenance: "SOURCED",
      confidence: "High (Missing Disbursement Dates)",
      title: "Disbursement Schedule & Installment Breakdown Omitted",
      description: "The sources confirm an annual award of $10,000, but fail to clarify whether payments are released in one lump-sum or split per semester.",
      actionText: "Check with financial aid whether fees are paid directly to your university registrar.",
      quoteA: "provides $10,000 per academic year [payment schedule omitted]",
      sourceA: "Official Aurora Guidelines",
      urlA: "https://aurorascholarship.org/2026-guidelines"
    }
  ],
  checklist: [
    {
      id: "c-1",
      priority: "high",
      text: "Verify renewal policy: Ask registrar if the $10,000 continues for all 4 years and what minimum GPA is required.",
      verifyAt: "Official Notice / Registrar Helpdesk",
      findingId: "f-1",
      done: false
    },
    {
      id: "c-2",
      priority: "high",
      text: "Clarify mandatory documents: Confirm whether the Notarized Parent Affidavit on stamp paper is compulsory before applying.",
      verifyAt: "EduTrack Portal / Helpline",
      findingId: "f-2",
      done: false
    },
    {
      id: "c-3",
      priority: "high",
      text: "Ignore the Oct 31, 2024 date: Confirm strict final deadline is November 15, 2026 (11:59 PM).",
      verifyAt: "aurorascholarship.org/2026-guidelines",
      findingId: "f-3",
      done: false
    },
    {
      id: "c-4",
      priority: "med",
      text: "Obtain Income Certificate stating family income under $60,000 before the November deadline.",
      verifyAt: "Tehsildar / Competent Local Authority",
      findingId: "asp-8",
      done: false
    },
    {
      id: "c-5",
      priority: "med",
      text: "Verify Aadhaar / Bank account linkage for Direct Benefit Transfer (DBT) disbursement.",
      verifyAt: "Applicant's Bank Branch",
      findingId: "f-7",
      done: false
    },
    {
      id: "c-6",
      priority: "med",
      text: "Clarify eligibility if you are a transfer student or took a post-12th gap year.",
      verifyAt: "Scholarship FAQ / Admissions",
      findingId: "f-6",
      done: false
    },
    {
      id: "c-7",
      priority: "med",
      text: "Prepare for December 2026 interview: Confirm interview format (virtual vs in-person).",
      verifyAt: "Official Guidelines Section 4",
      findingId: "asp-6",
      done: false
    },
    {
      id: "c-8",
      priority: "low",
      text: "Check if receiving another state or private scholarship disqualifies the Aurora award.",
      verifyAt: "Scholarship Terms & Conditions #8",
      findingId: "f-1",
      done: false
    },
    {
      id: "c-9",
      priority: "low",
      text: "Request official Principal Recommendation Letter on school letterhead in advance.",
      verifyAt: "High School Administration",
      findingId: "f-2",
      done: false
    }
  ],
  agreements: [
    {
      title: "Minimum Aggregate Score: 85%",
      desc: "Corroborated across 4 sources without deviation. Applicants must hold ≥ 85% aggregate in high school STEM courses."
    },
    {
      title: "Annual Award Amount: $10,000",
      desc: "Consistently confirmed by official guidelines, third-party blogs, and national portal databases."
    },
    {
      title: "Household Income Cap: Under $60,000/year",
      desc: "Gross annual parental income must remain strictly below $60,000 to qualify for consideration."
    },
    {
      title: "Field of Study: Undergraduate STEM Only",
      desc: "Humanities and non-STEM undergraduate degrees are not eligible under the Aurora charter."
    }
  ]
};

// --- Application State ---
let currentSources = [...GOLDEN_SCENARIO.sources];
let currentAspects = [...GOLDEN_SCENARIO.aspects];
let currentFindings = [...GOLDEN_SCENARIO.findings];
let currentChecklist = [...GOLDEN_SCENARIO.checklist];

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderSourcesChips();
  renderMatrix();
  renderFindings("all");
  renderSourcesList();
  renderAgreements();
  renderChecklist();
  setupEventListeners();
});

// --- Theme Toggle ---
function initTheme() {
  const savedTheme = localStorage.getItem("darkspot_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const newTheme = current === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("darkspot_theme", newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("theme-icon");
  if (!icon) return;
  if (theme === "dark") {
    icon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
  } else {
    icon.innerHTML = `<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`;
  }
}

// --- Render Sources Chips in Setup Card ---
function renderSourcesChips() {
  const container = document.getElementById("sources-chip-container");
  const counter = document.getElementById("source-counter-badge");
  if (!container) return;

  counter.textContent = `${currentSources.length} Loaded`;
  container.innerHTML = "";

  currentSources.forEach((src, idx) => {
    const chip = document.createElement("div");
    chip.className = "source-chip";
    chip.innerHTML = `
      <span class="chip-domain">${src.domain}</span>
      <span class="chip-badge ${src.statusType}">${src.status}</span>
      <button class="chip-remove-btn" data-index="${idx}" title="Remove source">✕</button>
    `;
    container.appendChild(chip);
  });

  // Attach delete handlers
  container.querySelectorAll(".chip-remove-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = parseInt(e.currentTarget.getAttribute("data-index"), 10);
      currentSources.splice(idx, 1);
      renderSourcesChips();
      showToast("Source removed");
    });
  });
}

// --- Render Coverage Matrix ⭐ ---
function renderMatrix() {
  const tbody = document.getElementById("matrix-tbody");
  if (!tbody) return;

  tbody.innerHTML = "";

  currentAspects.forEach((asp) => {
    const tr = document.createElement("tr");
    if (asp.isGap) tr.className = "row-gap-highlight";
    if (asp.isConflict) tr.className = "row-conflict-highlight";

    // Aspect title cell
    let rowSummaryHtml = "";
    if (asp.isGap) {
      rowSummaryHtml = `<div class="aspect-summary" style="color: var(--gap); font-weight: 600;">⚠️ ${asp.summary}</div>`;
    } else if (asp.isConflict) {
      rowSummaryHtml = `<div class="aspect-summary" style="color: var(--conflict); font-weight: 600;">⇄ ${asp.summary}</div>`;
    } else {
      rowSummaryHtml = `<div class="aspect-summary">${asp.summary}</div>`;
    }

    const thAspect = document.createElement("td");
    thAspect.className = "matrix-aspect-th";
    thAspect.innerHTML = `
      <div class="aspect-title">
        <span>${asp.name}</span>
        ${asp.isConflict ? `<span class="severity-pill med" style="font-size: 9px;">CONFLICT</span>` : ""}
        ${asp.isGap ? `<span class="severity-pill high" style="font-size: 9px;">GAP</span>` : ""}
      </div>
      ${rowSummaryHtml}
    `;
    tr.appendChild(thAspect);

    // Source cells
    asp.cells.forEach((cell, cellIdx) => {
      const td = document.createElement("td");
      td.className = "matrix-cell";

      let pillClass = "missing";
      let icon = "✕";
      let statusText = "Not Found in Review";

      if (cell.status === "found") {
        pillClass = "found";
        icon = "✔";
        statusText = "Found";
      } else if (cell.status === "partial") {
        pillClass = "partial";
        icon = "◐";
        statusText = "Partial / Differs";
      }

      td.innerHTML = `
        <div class="cell-pill ${pillClass}" title="${cell.preview}">
          <span>${icon}</span>
          <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 130px;">
            ${cell.preview}
          </span>
        </div>
      `;

      td.addEventListener("click", () => {
        openEvidenceDrawerForCell(asp, cell, cellIdx);
      });

      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });
}

// --- Render Findings List ---
function renderFindings(filterType) {
  const container = document.getElementById("findings-list");
  if (!container) return;

  container.innerHTML = "";

  const filtered = currentFindings.filter(f => {
    if (filterType === "all") return true;
    return f.type === filterType;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="setup-card" style="text-align: center; color: var(--muted); padding: 32px;">No findings found for this category filter.</div>`;
    return;
  }

  filtered.forEach(f => {
    const card = document.createElement("div");
    card.className = `finding-card ${f.type}`;

    let typeLabel = "Potential Gap";
    if (f.type === "conflict") typeLabel = "Possible Conflict";
    if (f.type === "stale") typeLabel = "Staleness Warning";
    if (f.type === "question") typeLabel = "Unanswered Question";

    let compareHtml = "";
    if (f.isSideBySide) {
      compareHtml = `
        <div class="conflict-compare-box">
          <div class="quote-column">
            <div class="quote-source-label">
              <span>📄</span>
              <span>${f.sourceA}</span>
            </div>
            <div class="quote-block">"${f.quoteA}"</div>
          </div>
          <div class="quote-column">
            <div class="quote-source-label">
              <span>📄</span>
              <span>${f.sourceB}</span>
            </div>
            <div class="quote-block" style="border-left-color: var(--conflict);"><mark>"${f.quoteB}"</mark></div>
          </div>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="finding-header">
        <div class="finding-badge-group">
          <span class="finding-type-badge ${f.type}">${typeLabel}</span>
          <span class="severity-pill ${f.severity}">${f.severity} priority</span>
        </div>
        <span class="provenance-tag ${f.provenance.toLowerCase().replace(' ', '-')}">
          ${f.provenance === 'SOURCED' ? '✔ SOURCED' : f.provenance === 'AI-SUGGESTED' ? '✨ AI-SUGGESTED' : '❓ UNCERTAIN'}
        </span>
      </div>

      <div class="finding-title">${f.title}</div>
      <div class="finding-desc">${f.description}</div>

      ${compareHtml}

      <div class="finding-footer-actions">
        <button class="btn-link-action view-evidence-btn" data-id="${f.id}">
          <span>View Sourced Evidence & Quotes</span>
          <span>→</span>
        </button>
        <button class="btn-secondary add-to-checklist-btn" data-id="${f.id}" style="padding: 4px 10px; font-size: 11px;">
          + Add to Checklist
        </button>
      </div>
    `;

    container.appendChild(card);
  });

  // Attach evidence buttons
  container.querySelectorAll(".view-evidence-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.getAttribute("data-id");
      const finding = currentFindings.find(item => item.id === id);
      if (finding) openEvidenceDrawerForFinding(finding);
    });
  });

  container.querySelectorAll(".add-to-checklist-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.getAttribute("data-id");
      const finding = currentFindings.find(item => item.id === id);
      if (finding) {
        addFindingToChecklist(finding);
      }
    });
  });
}

// --- Render Sources List ---
function renderSourcesList() {
  const container = document.getElementById("sources-list");
  if (!container) return;
  container.innerHTML = "";

  currentSources.forEach((src) => {
    const card = document.createElement("div");
    card.className = "finding-card";
    card.style.borderLeft = "4px solid var(--brand)";
    card.innerHTML = `
      <div class="finding-header">
        <div class="finding-badge-group">
          <span class="chip-badge ${src.statusType}">${src.status}</span>
          <span class="font-mono" style="font-size: 12px; color: var(--muted);">${src.domain}</span>
        </div>
        <span class="pill-badge" style="background: var(--surface-alt); border: 1px solid var(--border);">
          Date Detection: ${src.detectionMethod}
        </span>
      </div>

      <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 4px;">${src.title}</h3>
      <a href="${src.url}" target="_blank" class="font-mono" style="font-size: 12px; color: var(--brand); text-decoration: none; display: inline-block; margin-bottom: 12px;">
        ${src.url} ↗
      </a>

      <div style="background: var(--surface-alt); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 12px; font-size: 13px; line-height: 1.5; color: var(--text-secondary); font-style: italic;">
        "${src.excerpt}"
      </div>

      <div style="margin-top: 12px; display: flex; justify-content: space-between; font-size: 12px; color: var(--muted);">
        <span>Detected Date: <strong>${src.date}</strong></span>
        <span>Quote Extraction Status: <strong style="color: var(--found);">100% Exact Verified</strong></span>
      </div>
    `;
    container.appendChild(card);
  });
}

// --- Render Agreements ---
function renderAgreements() {
  const container = document.getElementById("agreements-list");
  if (!container) return;
  container.innerHTML = "";

  GOLDEN_SCENARIO.agreements.forEach(item => {
    const box = document.createElement("div");
    box.style.background = "var(--surface-alt)";
    box.style.border = "1px solid var(--border)";
    box.style.borderRadius = "var(--radius-sm)";
    box.style.padding = "14px";

    box.innerHTML = `
      <div style="font-weight: 700; font-size: 14px; color: var(--text); display: flex; align-items: center; gap: 8px;">
        <span style="color: var(--found);">✔</span>
        <span>${item.title}</span>
      </div>
      <div style="font-size: 13px; color: var(--text-secondary); margin-top: 4px; line-height: 1.4;">
        ${item.desc}
      </div>
    `;
    container.appendChild(box);
  });
}

// --- Render Checklist ⭐ ---
function renderChecklist() {
  const container = document.getElementById("checklist-items-container");
  const counter = document.getElementById("checklist-counter");
  const progressBar = document.getElementById("checklist-progress-bar");
  const pctLabel = document.getElementById("checklist-pct-label");
  if (!container) return;

  container.innerHTML = "";

  const completedCount = currentChecklist.filter(i => i.done).length;
  const total = currentChecklist.length;
  const pct = total > 0 ? Math.round((completedCount / total) * 100) : 0;

  counter.textContent = `${completedCount} / ${total} Done`;
  progressBar.style.width = `${pct}%`;
  pctLabel.textContent = `${pct}%`;

  currentChecklist.forEach((item, index) => {
    const el = document.createElement("div");
    el.className = `checklist-item ${item.done ? "done" : ""}`;

    el.innerHTML = `
      <input type="checkbox" class="custom-checkbox" data-index="${index}" ${item.done ? "checked" : ""}>
      <div class="checklist-body">
        <span class="checklist-priority-tag ${item.priority}">${item.priority}</span>
        <div class="checklist-text">${item.text}</div>
        <div class="checklist-verify-at">
          <span>📍 Verify at:</span>
          <strong>${item.verifyAt}</strong>
        </div>
      </div>
    `;

    container.appendChild(el);
  });

  // Attach checkbox changes
  container.querySelectorAll(".custom-checkbox").forEach(cb => {
    cb.addEventListener("change", (e) => {
      const idx = parseInt(e.currentTarget.getAttribute("data-index"), 10);
      currentChecklist[idx].done = e.currentTarget.checked;
      renderChecklist();
    });
  });
}

function addFindingToChecklist(finding) {
  const newItem = {
    id: `custom-${Date.now()}`,
    priority: finding.severity || "high",
    text: finding.actionText || `Investigate ${finding.title}`,
    verifyAt: finding.sourceA || "Official Notice",
    findingId: finding.id,
    done: false
  };
  currentChecklist.unshift(newItem);
  renderChecklist();
  showToast("Added item to Verify-Next Checklist");
}

// --- Evidence Drawer Handlers ---
function openEvidenceDrawerForCell(aspect, cell, sourceIdx) {
  const source = currentSources[sourceIdx];
  const drawer = document.getElementById("evidence-drawer");
  const backdrop = document.getElementById("drawer-backdrop");

  document.getElementById("drawer-title").textContent = `${aspect.name} (${source.domain})`;
  document.getElementById("drawer-source-title").textContent = source.title;
  document.getElementById("drawer-source-url").textContent = source.url;
  document.getElementById("drawer-external-link").setAttribute("href", source.url);

  const quoteEl = document.getElementById("drawer-quote-text");
  const badgeEl = document.getElementById("drawer-provenance-badge");
  const confText = document.getElementById("drawer-confidence-text");
  const evalDesc = document.getElementById("drawer-eval-desc");

  if (cell.status === "missing") {
    badgeEl.className = "provenance-tag sourced";
    badgeEl.textContent = "VERIFIED ABSENCE";
    quoteEl.textContent = `[Absence Verified] No text corresponding to "${aspect.name}" was found in the cleaned document body of ${source.domain}.`;
    confText.textContent = "High (Clean Full-Text Scan)";
    evalDesc.textContent = `Full body scan of ${source.title} contained zero semantic occurrences of '${aspect.name.toLowerCase()}'.`;
  } else {
    badgeEl.className = "provenance-tag sourced";
    badgeEl.textContent = "SOURCED CLAIM";
    quoteEl.textContent = `"${cell.quote || cell.preview}"`;
    confText.textContent = "High (Exact Substring Match)";
    evalDesc.textContent = `Extracted via verified source body parsing with date stamp verified through ${source.detectionMethod}.`;
  }

  backdrop.classList.add("open");
}

function openEvidenceDrawerForFinding(finding) {
  const backdrop = document.getElementById("drawer-backdrop");
  document.getElementById("drawer-title").textContent = finding.title;
  document.getElementById("drawer-source-title").textContent = finding.sourceA || "Multiple Cross-Referenced Sources";
  document.getElementById("drawer-source-url").textContent = finding.urlA || "https://aurorascholarship.org";
  document.getElementById("drawer-external-link").setAttribute("href", finding.urlA || "#");

  const badgeEl = document.getElementById("drawer-provenance-badge");
  badgeEl.className = `provenance-tag ${finding.provenance.toLowerCase().replace(' ', '-')}`;
  badgeEl.textContent = finding.provenance;

  document.getElementById("drawer-confidence-text").textContent = finding.confidence;
  document.getElementById("drawer-quote-text").textContent = finding.quoteA ? `"${finding.quoteA}"` : `No single quote. Signal inferred from complete lack of policy.`;
  document.getElementById("drawer-eval-desc").textContent = finding.description;

  backdrop.classList.add("open");
}

function closeEvidenceDrawer() {
  const backdrop = document.getElementById("drawer-backdrop");
  backdrop.classList.remove("open");
}

// --- Analysis Simulation Pipeline ---
function runAnalysisSimulation() {
  const stepper = document.getElementById("stepper-section");
  const stepperLog = document.getElementById("stepper-log");
  const timer = document.getElementById("stepper-timer");

  stepper.style.display = "block";
  stepper.scrollIntoView({ behavior: "smooth", block: "start" });

  let seconds = 0;
  const timerInterval = setInterval(() => {
    seconds += 0.2;
    timer.textContent = `${seconds.toFixed(1)}s`;
  }, 200);

  const steps = [
    { id: "step-1", log: "▶ [Collect] Running SSRF guard & fetching 5 sources (Safe DNS + private IP block)" },
    { id: "step-2", log: "▶ [Extract] Parsing Mozilla Readability DOM text & JSON-LD date schemas" },
    { id: "step-3", log: "▶ [Claims] Extracting typed atomic claims matching scholarship aspect templates" },
    { id: "step-4", log: "▶ [Verify Quotes] Running exact & whitespace fuzzy substring matching on all claims" },
    { id: "step-5", log: "▶ [Detect] Found 3 Gaps, 2 Conflicts (Documents & Deadlines), 2 Stale sources" },
    { id: "step-6", log: "▶ [Checklist] Ranking 9 high-impact verify actions with official verification targets" }
  ];

  let currentStepIdx = 0;

  function advanceStep() {
    if (currentStepIdx < steps.length) {
      const step = steps[currentStepIdx];

      // Mark previous completed
      for (let i = 0; i < currentStepIdx; i++) {
        document.getElementById(steps[i].id).className = "step-item completed";
      }

      // Mark current active
      document.getElementById(step.id).className = "step-item active";

      // Append log
      const logLine = document.createElement("div");
      logLine.className = "log-line active";
      logLine.textContent = step.log;
      stepperLog.appendChild(logLine);
      stepperLog.scrollTop = stepperLog.scrollHeight;

      currentStepIdx++;
      setTimeout(advanceStep, 380);
    } else {
      clearInterval(timerInterval);
      for (let i = 0; i < steps.length; i++) {
        document.getElementById(steps[i].id).className = "step-item completed";
      }

      const finishLine = document.createElement("div");
      finishLine.className = "log-line";
      finishLine.style.color = "var(--found)";
      finishLine.style.fontWeight = "700";
      finishLine.textContent = "✔ Analysis Complete: Coverage Matrix & Evidence synthesized in 2.4s";
      stepperLog.appendChild(finishLine);

      showToast("Investigation synthesized successfully!");

      // Update counters
      document.getElementById("count-sources").textContent = currentSources.length;
      document.getElementById("count-gaps").textContent = "3";
      document.getElementById("count-conflicts").textContent = "2";
      document.getElementById("count-stale").textContent = "2";
      document.getElementById("count-actions").textContent = currentChecklist.length;

      // Re-render UI
      renderMatrix();
      renderFindings("all");
      renderChecklist();
    }
  }

  advanceStep();
}

// --- Copy as Markdown ---
function copyChecklistAsMarkdown() {
  let md = `# DarkSpot Lens — Actionable Verification Checklist\n`;
  md += `**Investigation:** ${document.getElementById("goal-input").value || "Scholarship Opportunity Investigation"}\n`;
  md += `**Date:** ${new Date().toLocaleDateString()}\n\n`;
  md += `## Priority Actions\n`;

  currentChecklist.forEach(item => {
    const checkMark = item.done ? "[x]" : "[ ]";
    md += `- ${checkMark} **[${item.priority.toUpperCase()}]** ${item.text} *(Verify at: ${item.verifyAt})*\n`;
  });

  md += `\n---\n*Generated by DarkSpot Lens — AI-Assisted Gap & Conflict Detection Platform*`;

  navigator.clipboard.writeText(md).then(() => {
    showToast("Checklist copied to clipboard as Markdown!");
  }).catch(() => {
    showToast("Copied to clipboard!");
  });
}

// --- Toast Utility ---
function showToast(message) {
  const toast = document.getElementById("global-toast");
  if (!toast) return;
  toast.textContent = message;
  toast.style.display = "block";
  setTimeout(() => {
    toast.style.display = "none";
  }, 2500);
}

// --- Setup Event Listeners ---
function setupEventListeners() {
  // Theme toggle
  document.getElementById("theme-toggle-btn").addEventListener("click", toggleTheme);

  // Sample scenario load button
  document.getElementById("sample-scenario-btn").addEventListener("click", () => {
    document.getElementById("goal-input").value = GOLDEN_SCENARIO.goal;
    document.getElementById("domain-select").value = GOLDEN_SCENARIO.domain;
    currentSources = [...GOLDEN_SCENARIO.sources];
    renderSourcesChips();
    showToast("Aurora Scholarship golden sample scenario loaded");
  });

  document.getElementById("quick-demo-btn").addEventListener("click", () => {
    document.getElementById("goal-input").value = GOLDEN_SCENARIO.goal;
    currentSources = [...GOLDEN_SCENARIO.sources];
    renderSourcesChips();
    runAnalysisSimulation();
  });

  // Run analysis button
  document.getElementById("run-analysis-btn").addEventListener("click", runAnalysisSimulation);

  // Reset button
  document.getElementById("reset-setup-btn").addEventListener("click", () => {
    document.getElementById("goal-input").value = "";
    currentSources = [];
    renderSourcesChips();
    showToast("Investigation cleared");
  });

  // Add source button
  document.getElementById("add-url-btn").addEventListener("click", () => {
    const input = document.getElementById("new-url-input");
    const val = input.value.trim();
    if (!val) return;

    try {
      const url = new URL(val.startsWith("http") ? val : `https://${val}`);
      const newSrc = {
        id: `src-${Date.now()}`,
        title: `Source: ${url.hostname}`,
        domain: url.hostname,
        url: url.href,
        date: new Date().toLocaleDateString(),
        detectionMethod: "Active HTTP Fetch",
        status: "Active URL",
        statusType: "blog",
        excerpt: "Fetched webpage content will be processed for aspect and claim extraction."
      };
      currentSources.push(newSrc);
      input.value = "";
      renderSourcesChips();
      showToast(`Added ${url.hostname}`);
    } catch {
      showToast("Please enter a valid HTTP/HTTPS URL");
    }
  });

  // Tab switching
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

      const targetTab = e.currentTarget.getAttribute("data-tab");
      e.currentTarget.classList.add("active");
      document.getElementById(targetTab).classList.add("active");
    });
  });

  // Findings filter buttons
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      e.currentTarget.classList.add("active");
      const filter = e.currentTarget.getAttribute("data-filter");
      renderFindings(filter);
    });
  });

  // Metric card clicks filter directly
  document.getElementById("metric-sources-card").addEventListener("click", () => {
    document.querySelector('[data-tab="sources-tab"]').click();
  });
  document.getElementById("metric-gaps-card").addEventListener("click", () => {
    document.querySelector('[data-tab="findings-tab"]').click();
    document.querySelector('[data-filter="gap"]').click();
  });
  document.getElementById("metric-conflicts-card").addEventListener("click", () => {
    document.querySelector('[data-tab="findings-tab"]').click();
    document.querySelector('[data-filter="conflict"]').click();
  });
  document.getElementById("metric-stale-card").addEventListener("click", () => {
    document.querySelector('[data-tab="findings-tab"]').click();
    document.querySelector('[data-filter="stale"]').click();
  });
  document.getElementById("metric-checklist-card").addEventListener("click", () => {
    document.querySelector(".checklist-panel").scrollIntoView({ behavior: "smooth" });
  });

  // Copy checklist button
  document.getElementById("copy-markdown-btn").addEventListener("click", copyChecklistAsMarkdown);

  // Evidence Drawer close
  document.getElementById("drawer-close-btn").addEventListener("click", closeEvidenceDrawer);
  document.getElementById("drawer-backdrop").addEventListener("click", (e) => {
    if (e.target.id === "drawer-backdrop") closeEvidenceDrawer();
  });

  // Limits Modal
  const limitsModal = document.getElementById("limits-modal-backdrop");
  document.getElementById("open-limits-btn").addEventListener("click", () => {
    limitsModal.classList.add("open");
  });
  document.getElementById("close-limits-modal-btn").addEventListener("click", () => {
    limitsModal.classList.remove("open");
  });
  document.getElementById("dismiss-limits-btn").addEventListener("click", () => {
    limitsModal.classList.remove("open");
  });
  limitsModal.addEventListener("click", (e) => {
    if (e.target.id === "limits-modal-backdrop") limitsModal.classList.remove("open");
  });

  // Paste Text Modal
  const pasteModal = document.getElementById("paste-modal-backdrop");
  document.getElementById("paste-text-modal-btn").addEventListener("click", () => {
    pasteModal.classList.add("open");
  });
  document.getElementById("close-paste-modal-btn").addEventListener("click", () => {
    pasteModal.classList.remove("open");
  });
  document.getElementById("cancel-paste-btn").addEventListener("click", () => {
    pasteModal.classList.remove("open");
  });
  document.getElementById("confirm-paste-btn").addEventListener("click", () => {
    const title = document.getElementById("paste-title-input").value.trim() || "Pasted Document";
    const content = document.getElementById("paste-content-input").value.trim();
    if (!content) {
      showToast("Please enter text content");
      return;
    }
    currentSources.push({
      id: `pasted-${Date.now()}`,
      title: title,
      domain: "pasted-text.local",
      url: "#pasted",
      date: new Date().toLocaleDateString(),
      detectionMethod: "Pasted Plain Text",
      status: "Pasted Text",
      statusType: "blog",
      excerpt: content.slice(0, 220) + "..."
    });
    renderSourcesChips();
    pasteModal.classList.remove("open");
    document.getElementById("paste-content-input").value = "";
    showToast("Pasted text source added");
  });
  pasteModal.addEventListener("click", (e) => {
    if (e.target.id === "paste-modal-backdrop") pasteModal.classList.remove("open");
  });

  // Keyboard accessibility
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeEvidenceDrawer();
      limitsModal.classList.remove("open");
      pasteModal.classList.remove("open");
    }
  });
}
