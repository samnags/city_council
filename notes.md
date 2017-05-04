\copy (SELECT * FROM members) TO './members.csv' WITH CSV HEADER
\copy (SELECT * FROM attendances) TO './attendances.csv' WITH CSV HEADER
\copy (SELECT * FROM meetings) TO './meetings.csv' WITH CSV HEADER
\copy (SELECT * FROM districts) TO './districts.csv' WITH CSV HEADER



copy attendances from '/Users/samnagourney/Development/Projects/1city-council/csv/attendances.csv' DELIMITERS ','  CSV;

