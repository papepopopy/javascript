SELECT*FROM t_res;

UPDATE t_res
SET
	resDate		= ADDDATE(resDate, INTERVAL 1 DAY),
	resBeginDate= ADDDATE(resBeginDate, INTERVAL 1 DAY),
	resturnDate	= ADDDATE(resturnDate, INTERVAL 1 DAY)
WHERE resNumber = "100";
SELECT*FROM t_res;

-- 예약 조회시
SELECT resNumber, resCarNumber, resDate, resBeginDate, resturnDate, resUserId
FROM t_res
WHERE resNumber = '1' -- 조건식
ORDER BY resNumber DESC -- 내림차순
;
