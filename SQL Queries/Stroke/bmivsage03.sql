SELECT 
	bmi, 
	age 
FROM stroke
WHERE smoking_status = 'smokes'
AND hypertension = 0