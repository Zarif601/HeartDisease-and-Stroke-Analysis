SELECT 
	bmi, 
	age 
FROM stroke
WHERE smoking_status = 'never smoked'
AND hypertension = 1