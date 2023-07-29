const engFullBooks = {
	genesis: "GEN",
	exodus: "EXO",
	leviticus: "LEV",
	numbers: "NUM",
	deuteronomy: "DEU",
	joshua: "JOS",
	judges: "JDG",
	ruth: "RUT",
	"1samuel": "1SA",
	"2samuel": "2SA",
	"1kings": "1KI",
	"2kings": "2KI",
	"1chronicles": "1CH",
	"2chronicles": "2CH",
	ezra: "EZR",
	nehemiah: "NEH",
	esther: "EST",
	job: "JOB",
	psalm: "PSA",
	proverbs: "PRO",
	ecclesiastes: "ECC",
	songofsolomon: "SNG",
	isaiah: "ISA",
	jeremiah: "JER",
	lamentations: "LAM",
	ezekiel: "EZK",
	daniel: "DAN",
	hosea: "HOS",
	joel: "JOL",
	amos: "AMO",
	obadiah: "OBA",
	jonah: "JON",
	micah: "MIC",
	nahum: "NAM",
	habakkuk: "HAB",
	zephaniah: "ZEP",
	haggai: "HAG",
	zechariah: "ZEC",
	malachi: "MAL",
	matthew: "MAT",
	mark: "MRK",
	luke: "LKE",
	john: "JHN",
	acts: "ACT",
	romans: "ROM",
	"1corinthians": "1CO",
	"2corinthians": "2CO",
	galatians: "GAL",
	ephesians: "EPH",
	philippians: "PHP",
	colossians: "COL",
	"1thessalonians": "1TH",
	"2thessalonians": "2TH",
	"1timothy": "1TI",
	"2timothy": "2TI",
	titus: "TIT",
	philemon: "PHM",
	hebrews: "HEB",
	james: "JAS",
	"1peter": "1PE",
	"2peter": "2PE",
	"1john": "1JN",
	"2john": "2JN",
	"3john": "3JN",
	jude: "JUD",
	revelation: "REV",
};

const youVersionBooks = {
	exo: "EXO",
	gen: "GEN",
	lev: "LEV",
	num: "NUM",
	deu: "DEU",
	jos: "JOS",
	jdg: "JDG",
	rut: "RUT",
	"1sa": "1SA",
	"2sa": "2SA",
	"1ki": "1KI",
	"2ki": "2KI",
	"1ch": "1CH",
	"2ch": "2CH",
	ezr: "EZR",
	neh: "NEH",
	est: "EST",
	job: "JOB",
	psa: "PSA",
	pro: "PRO",
	ecc: "ECC",
	sng: "SNG",
	isa: "ISA",
	jer: "JER",
	lam: "LAM",
	ezk: "EZK",
	dan: "DAN",
	hos: "HOS",
	jol: "JOL",
	amo: "AMO",
	oba: "OBA",
	jon: "JON",
	mic: "MIC",
	nam: "NAM",
	hab: "HAB",
	zep: "ZEP",
	hag: "HAG",
	zec: "ZEC",
	mal: "MAL",
	mat: "MAT",
	mrk: "MRK",
	lke: "LKE",
	jhn: "JHN",
	act: "ACT",
	rom: "ROM",
	"1co": "1CO",
	"2co": "2CO",
	gal: "GAL",
	eph: "EPH",
	php: "PHP",
	col: "COL",
	"1th": "1TH",
	"2th": "2TH",
	"1ti": "1TI",
	"2ti": "2TI",
	tit: "TIT",
	phm: "PHM",
	heb: "HEB",
	jas: "JAS",
	"1pe": "1PE",
	"2pe": "2PE",
	"1jn": "1JN",
	"2jn": "2JN",
	"3jn": "3JN",
	jud: "JUD",
	rev: "REV",
};

const plFullBooks = {
	księgarodzaju: "GEN",
	księgawyjścia: "EXO",
	księgakapłańska: "LEV",
	księgaliczb: "NUM",
	księgapowtórzonegoprawa: "DEU",
	księgajozuego: "JOS",
	księgasędziów: "JDG",
	księgarut: "RUT",
	"1księgasamuela": "1SA",
	"2księgasamuela": "2SA",
	"1księgakrólewska": "1KI",
	"2księgakrólewska": "2KI",
	księgakronik: "1CH",
	"2księgakronik": "2CH",
	księgaezdrasza: "EZR",
	księganehemiasza: "NEH",
	księgaestery: "EST",
	księgahioba: "JOB",
	księgapsalmów: "PSA",
	księgaprzysłów: "PRO",
	księgakaznodziei: "ECC",
	pieśńnadpieśniami: "SNG",
	księgaizajasza: "ISA",
	księgajeremiasza: "JER",
	księgalamentacji: "LAM",
	księgaezechiela: "EZK",
	księgadaniela: "DAN",
	księgaozeasza: "HOS",
	księgajoela: "JOL",
	księgaamosa: "AMO",
	księgaabdiasza: "OBA",
	księgajonasza: "JON",
	księgamicheasza: "MIC",
	księganahuma: "NAM",
	księgahabakuka: "HAB",
	księgasofoniasza: "ZEP",
	księgaaggeusza: "HAG",
	księgazachariasza: "ZEC",
	księgamalachiasza: "MAL",
	ewangeliawedługmateusza: "MAT",
	ewangeliawedługmarka: "MRK",
	ewangeliawedługłukasza: "LKE",
	ewangeliawedługjana: "JHN",
	dziejeapostolskie: "ACT",
	listdorzymian: "ROM",
	"1listdokoryntian": "1CO",
	"2listdokoryntian": "2CO",
	listdogalatów: "GAL",
	listdoefezjan: "EPH",
	listdofilipian: "PHP",
	listdokolosan: "COL",
	"1listdotesaloniczan": "1TH",
	"2listdotesaloniczan": "2TH",
	"1listdotymoteusza": "1TI",
	"2listdotymoteusza": "2TI",
	listdotytusa: "TIT",
	listdofilemona: "PHM",
	listdohebrajczyków: "HEB",
	listjakuba: "JAS",
	"1listpiotra": "1PE",
	"2listpiotra": "2PE",
	"1listjana": "1JN",
	"2listjana": "2JN",
	"3listjana": "3JN",
	listjudy: "JUD",
	księgaobjawienia: "REV",
};

const plFullAlternativeBooks = {
	rodzaju: "GEN",
	wyjścia: "EXO",
	kapłańska: "LEV",
	liczb: "NUM",
	powtórzonegoprawa: "DEU",
	jozuego: "JOS",
	sędziów: "JDG",
	rut: "RUT",
	"1samuela": "1SA",
	"2samuela": "2SA",
	"1królewska": "1KI",
	"2królewska": "2KI",
	kronik: "1CH",
	"2kronik": "2CH",
	ezdrasza: "EZR",
	nehemiasza: "NEH",
	estery: "EST",
	hioba: "JOB",
	psalmów: "PSA",
	przysłów: "PRO",
	kaznodziei: "ECC",
	pieśńnadpieśniami: "SNG",
	izajasza: "ISA",
	jeremiasza: "JER",
	lamentacji: "LAM",
	ezechiela: "EZK",
	daniela: "DAN",
	ozeasza: "HOS",
	joela: "JOL",
	amosa: "AMO",
	abdiasza: "OBA",
	jonasza: "JON",
	micheasza: "MIC",
	nahuma: "NAM",
	habakuka: "HAB",
	sofoniasza: "ZEP",
	aggeusza: "HAG",
	zachariasza: "ZEC",
	malachiasza: "MAL",
	mateusza: "MAT",
	marka: "MRK",
	łukasza: "LKE",
	jana: "JHN",
	dziejówapostolskich: "ACT",
	rzymian: "ROM",
	"1koryntian": "1CO",
	"2koryntian": "2CO",
	galatów: "GAL",
	efezjan: "EPH",
	filipian: "PHP",
	kolosan: "COL",
	"1tesaloniczan": "1TH",
	"2tesaloniczan": "2TH",
	"1tymoteusza": "1TI",
	"2tymoteusza": "2TI",
	tytusa: "TIT",
	filemona: "PHM",
	hebrajczyków: "HEB",
	jakuba: "JAS",
	"1piotra": "1PE",
	"2piotra": "2PE",
	"1jana": "1JN",
	"2jana": "2JN",
	"3jana": "3JN",
	judy: "JUD",
	objawienia: "REV",
};

const plShortBooks = {
	rdz: "GEN",
	wj: "EXO",
	kpl: "LEV",
	lb: "NUM",
	pwt: "DEU",
	joz: "JOS",
	sdz: "JDG",
	rt: "RUT",
	"1sm": "1SA",
	"2sm": "2SA",
	"1krl": "1KI",
	"2krl": "2KI",
	"1krn": "1CH",
	"2krn": "2CH",
	ezd: "EZR",
	ne: "NEH",
	est: "EST",
	hi: "JOB",
	ps: "PSA",
	prz: "PRO",
	koh: "ECC",
	pnp: "SNG",
	iz: "ISA",
	jer: "JER",
	lm: "LAM",
	ez: "EZK",
	dn: "DAN",
	oz: "HOS",
	jl: "JOL",
	am: "AMO",
	abd: "OBA",
	jon: "JON",
	mi: "MIC",
	na: "NAM",
	ha: "HAB",
	so: "ZEP",
	ag: "HAG",
	za: "ZEC",
	mal: "MAL",
	mt: "MAT",
	mk: "MRK",
	łk: "LKE",
	jn: "JHN",
	dz: "ACT",
	rz: "ROM",
	"1kor": "1CO",
	"2kor": "2CO",
	gał: "GAL",
	ef: "EPH",
	flp: "PHP",
	kol: "COL",
	"1tes": "1TH",
	"2tes": "2TH",
	"1tm": "1TI",
	"2tm": "2TI",
	tt: "TIT",
	flm: "PHM",
	hbr: "HEB",
	jk: "JAS",
	"1p": "1PE",
	"2p": "2PE",
	"1j": "1JN",
	"2j": "2JN",
	"3j": "3JN",
	jud: "JUD",
	obj: "REV",
};

const allBooks = {
	...youVersionBooks,
	...engFullBooks,
	...plFullAlternativeBooks,
	...plFullBooks,
	...plShortBooks,
} as {
	[key: string]: string;
};

export default function getBook(str: string): string | undefined {
	str = str.toLowerCase().replace(/\s/g, "");
	return allBooks[str];
}
