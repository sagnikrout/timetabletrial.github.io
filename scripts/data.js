let year = '2022';
let semester = 'Spring';

function School(code, name, courses) {
	this.code = code;
	this.name = name;
	this.courses = courses;
}

function short_name(school) {
	return school.name.split(' ').slice(2).join(' ')
}

function Course(name, nick, slot) {
	this.name = name;
	this.nick = nick;
	this.slot = slot;
}

let schools = {
	'SCS': new School('C', 'School of Chemical Sciences', []),
	'SBS': new School('B', 'School of Biological Sciences', []),
	'SPS': new School('P', 'School of Physical Sciences', []),
	'SMS': new School('M', 'School of Mathematical Sciences', []),
	'SCPS': new School('CS', 'School of Computer Sciences', []),
	'SHSS': new School('H', 'School of Humanities and Social Sciences', []),
};

let courses = {
	// always use A1, A2, ... for degenerates of slot A
	/* Biology */
	'B201': new Course('Microbiology (LH2)', 'MicroBio', 'C'),
	'B202': new Course('Biochemistry (LH3)', 'BioChem', 'E'),

	'B301': new Course('Animal Physiology (B1)', 'AniPhys', 'A'),
	'B302': new Course('Plant Physiology (B1)', 'PlntPhys', 'E'),
	'B303': new Course('Ecology (LH5)', 'Ecol', 'J'),
	'B354': new Course('Neurobiology (--)', 'Neuro', 'A'),
	'B355': new Course('Structural Biology (B4)', 'StrucBio', 'B'),
	
	'B402': new Course('Developmental Biology (B5)', 'DevBio', 'A'),
	'B403': new Course('Bioinformatics (LH2)', 'BioInfo', 'E'),
	'B451': new Course('Advanced Cell Biology (B5)', 'AdvCellBio', 'D'),
	
	'B551': new Course('Advanced Molecular Biology (B3)', 'AdvMolBio', 'B'),
	'B555': new Course('Advanced Genetics (B2)', 'AdvGen', 'C'),

	/* Chemistry */
	'C201': new Course('Basic Inorganic Chemistry (LH3)', 'BInoChem', 'F'),
	'C203': new Course('Reaction Mechanisms in Organic Chemistry (LH2)', 'RMOC', 'D'),
	'C207': new Course('Mathematical Methods for Chemist (LH4)', 'MMChem', 'B'),

	'C301': new Course('Physical Organic Chemistry (C6)', 'PhyOrChem', 'B'),
	'C302': new Course('Molecular Spectroscopy and Group Theory (C6)', 'MSGrpThe', 'F'),
	'C307': new Course('Thermodynamics and Electrochemistry (LH2)', 'ThermElect', 'C'),

	'C401': new Course('Physical Methods in Chemistry II (C1)', 'PMCII', 'D'),
	'C403': new Course('Chemistry of Heterocycles and Natural Products (C1)', 'ChemHeNaPro', 'A'),

	'C552': new Course('Solid State Chemistry (C2)', 'SolStatChem', 'C'),
	'C559': new Course('Supramolecular Chemistry (C2)', 'SupmolChem', 'B'),
	'C560': new Course('Chemistry of Nanomaterial (C1)', 'NanoChem', 'F'),
	'C566': new Course('Catalysis: Reaction Mechanisms and Applications (C3)', 'Catalysis', 'B'),

	/* Computer Science */
	'CS201': new Course('Theory of computaion (LH2)', 'Th CS', 'B'),
	'CS301': new Course('Design and Analysis of Algirithms (M4)', 'Algorithm', 'F'),
	'CS454': new Course('Linear Programming and Combinatorial optimisation (M5)', 'Optimisation', 'F'),

	/* Humanities */
	'H209': new Course('Speculative Fiction (--)', 'SpecFic', 'J'),
	'H235': new Course('Sociology of Science and Technology (--)', 'SoSciTech', 'K'),
	'H238': new Course('Life and Community in Urban World (--)', 'LiComUrban', 'K'),
	
	/* Mathematics */
	'M201': new Course('Real Analysis (M2)', 'RAnal', 'C'),
	'M203': new Course('Discrete Mathematics (M2)', 'Discrete', 'A'),
	'M205': new Course('Linear Algebra (M2)', 'Lin Alg', 'D'),

	'M302': new Course('Rings and Modules (M5)', 'Modules', 'A'),
	'M303': new Course('Differential Equation (M5)', 'DiffQ', 'C'),
	'M305': new Course('Number Theory (M5)', 'Number', 'E'),
	'M306': new Course('Calculus of Several Variables (M5)', 'SVC', 'B'),

	'M401': new Course('Functional Analysis (M2)', 'F Anal', 'H'),
	'M403': new Course('Commutative Algebra (M2)', 'Comm Alg', 'G'),
	'M451': new Course('Advanced Complex Analysis (M3)', 'AC Anal', 'C'),
	'M467': new Course('Nonlinear Analysis (M4)', 'NL Anal', 'D'),
	'M471': new Course('Advanced Number Theory (M4)', 'Adv Num', 'A'),
	'M479': new Course('Random Graphs (M3)', 'R Graphs', 'B'),

	/* Physics */
	'P201': new Course('Classical Mechanics I (LH2)', 'CM I', 'E'),
	'P202': new Course('Mathematical Methods I (LH2)', 'MMPhy I', 'F'),
	'P207': new Course('Linear Optics (P107)', 'LinOpt', 'A'),

	'P302': new Course('Statistical Mechanics (LH4)', 'StatMech', 'E'),
	'P303': new Course('Quantum Mechanics II (P127)', 'QM II', 'A'),
	'P304': new Course('Special Theory of Relativity (LH3)', 'STR', 'D'),

	'P401': new Course('Classical Mechanics II: Mechanics of Continuous Media (P127)', 'CM II', 'D'),
	'P405/305': new Course('Atoms Molecules and Radiation (P127)', 'Rad', 'E'),
	'P453': new Course('Quantum Field Theory I (P108)', 'QFTI', 'B'),
	'P460': new Course('Many Particle Physics (P109)', 'MPP', 'C'),
	'P463': new Course('Astronomy and Astrophysics (P107)', 'Astro', 'C'),
	'P475': new Course('Special Topics in Quantum Mechanics (P109)', 'Spl QM', 'A'),
	'P476': new Course('Non Equilibrium Statistical Mechanics (P110)', 'NESM', 'A'),
	'P466': new Course('Quantum and Nano Electronics (P126)', 'QElec', 'A'),
};

for (let course in courses) {
	for (let school in schools) {
		if (schools[school].code === course.match(/^[^0-9]*/)[0]) {
			schools[school].courses.push(course);
		}
	}
}

// Colorblindness-friendly color palette from: https://davidmathlogic.com/colorblind/
let colors = [
	'#117733',
	'#44aa99',
	'#d55e00',
	'#88ccee',
	'#0072b2',
	'#ddcc77',
	'#cc6677',
	'#aa4499',
	'#882255',
	'#e69f00'
];