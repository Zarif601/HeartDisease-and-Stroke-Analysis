-- Creating tables for Heart_disease_data
CREATE TABLE hdt (
     HeartDisease boolean NOT NULL,
     BMI float NOT NULL,
	 Smoking boolean NOT NULL,
	 AlcoholDrinking boolean NOT NULL,
	 Stroke boolean NOT NULL,
	 PhysicalHealth int NOT NULL,
	 MentalHealth int NOT NULL,
     DiffWalking boolean NOT NULL,
	 Sex varchar(6) NOT NULL,
	 AgeCategory varchar(40) NOT NULL,
	 Race varchar (40) NOT NULL,
	 Diabetic boolean NOT NULL,
	 PreDiabetic boolean NOT NULL,
	 PhysicalActivity boolean NOT NULL,
	 GenHealth varchar (40) NOT NULL,
	 SleepTime int NOT NULL,
	 Asthma boolean NOT NULL,
	 KidneyDisease boolean NOT NULL,
	 SkinCancer boolean NOT NULL
);