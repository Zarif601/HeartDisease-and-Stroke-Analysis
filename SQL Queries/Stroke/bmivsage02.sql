SELECT 
	bmi, 
	age 
FROM stroke
WHERE smoking_status = 'formerly smoked'
AND hypertension = 0