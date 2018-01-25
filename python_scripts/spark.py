
'''spark-submit --packages org.mongodb.spark:mongo-spark-connector_2.11:2.2.0 spark.py
'''

#***** import the necessary packages*************


from pyspark.sql import SparkSession
import pandas as pd
import pandas_profiling
import requests
requests.packages.urllib3.disable_warnings()
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns


#********* Create a session of spark to excute our actions***********
#********* and connect to our mongodb database*********************

spark = SparkSession \
    .builder \
    .appName("DatabaseProject") \
    .config("spark.mongodb.input.uri", "mongodb://127.0.0.1/multimedia_database") \
    .config("spark.mongodb.output.uri", "mongodb://127.0.0.1/multimedia_database") \
    .getOrCreate()

#****************Prepare the RDD**************************



df = spark.read.format("com.mongodb.spark.sql.DefaultSource")\
    .option("spark.mongodb.input.uri", "mongodb://localhost:27017/multimedia_database.data").load()


#*********************************************
df.createOrReplaceTempView("data")
#df.cache()
#*****************************************

print("******************************")


'''nbr_developers = df.groupBy("Professional").count()
#us = us_limited.groupBy("state_code").count().sort("count", ascending=False).limit(10).toPandas()
df.groupBy("Professional").count().sort("count", ascending=False).toPandas().to_json('developers.json')
df.groupBy("Professional").count().sort("count", ascending=False).toPandas().to_csv('developers.csv')'''

print("******************************")


#********the different countries**********************#


'''countries = spark.sql("SELECT Country , count(*) as nbr FROM data GROUP BY Country ORDER BY nbr DESC  ")
countries.toPandas().to_csv('countries.csv')'''




#******* number of users who have the programming as a hobby




#********Different types of FormalEducation*****************

'''educations = spark.sql("SELECT DISTINCT(FormalEducation) , count(*) as nbr  FROM data WHERE FormalEducation!='NA'  group by FormalEducation ")

educations.toPandas().to_csv('educations.csv')'''





#-----------------------------------------------------




'''nbr_programmers_hobbies = spark.sql("SELECT count(*) FROM data WHERE ProgramHobby LIKE '%Yes%'")

nbr_programmers_hobbies.toPandas().to_csv('programmers_hobbies.csv')'''


#-----------------------------------------------------








#************different types of jobs responses*****************

'''different_responses_programmers_jobs = spark.sql("SELECT DISTINCT (Professional), count(*) as nbr  FROM data group by Professional ORDER BY nbr DESC ")

different_responses_programmers_jobs.toPandas().to_csv('programmers_professions.csv')'''


#-----------------------------------------------------




#************different types of jobs responses*****************

'''different_responses_programmers_jobs = spark.sql("SELECT DISTINCT (DeveloperType), count(*) as nbr  FROM data group by DeveloperType ORDER BY nbr DESC ")

different_responses_programmers_jobs.toPandas().to_csv('developertype.txt',index=False, header=False)'''





#********number of web developers****************
'''nbr_web_developers = spark.sql("SELECT  count(*) FROM data WHERE WebDeveloperType!='NA' ")
web_developers = spark.sql("SELECT DISTINCT (WebDeveloperType), count(*) as nbr   FROM data WHERE WebDeveloperType!='NA'  group by WebDeveloperType ORDER BY nbr DESC")

web_developers.toPandas().to_csv('web_developers.csv')
nbr_web_developers.toPandas().to_csv('nbr_web_developers.csv')'''


#-----------------------------------------------------


#********number of mobile developers ****************

'''nbr_android_developers = spark.sql("SELECT  count(*) FROM data WHERE MobileDeveloperType!='NA' AND MobileDeveloperType like '%Android%'  ")

nbr_ios_developers = spark.sql("SELECT  count(*) FROM data WHERE MobileDeveloperType!='NA' AND MobileDeveloperType like '%iOS%'  ")

nbr_windows_developers = spark.sql("SELECT  count(*) FROM data WHERE MobileDeveloperType!='NA' AND MobileDeveloperType like '%Windows%'  ")'''
'''mobile_developers = spark.sql("SELECT DISTINCT (MobileDeveloperType), count(*) as nbr   FROM data WHERE MobileDeveloperType!='NA'    group by MobileDeveloperType ORDER BY nbr DESC")
nbr_mobile_developers =spark.sql("SELECT  count(*) FROM data WHERE MobileDeveloperType!='NA' ")'''
#mobile_developers.show()
#mobile_developers.show()

#nbr_android_developers.show()
#nbr_ios_developers.show()
#nbr_windows_developers.show()

'''mobile_developers.toPandas().to_csv('mobile_developers.txt',index=False, header=False)
nbr_mobile_developers.toPandas().to_csv('nbr_mobile_developers.csv')'''




#-----------------------------------------------------


#*********different type of version control****************


'''version_control = spark.sql("SELECT DISTINCT (VersionControl), count(*) as type FROM data WHERE VersionControl!='NA'  group by VersionControl ORDER BY type DESC ")

version_control.toPandas().to_csv('version_control.csv')'''





#-----------------------------------------------------



#************different types of metholodgies*******************

methodologies = spark.sql("SELECT DISTINCT (Methodology), count(*) as type  FROM data WHERE Methodology!='NA'  group by Methodology ORDER BY type  ")

methodologies.toPandas().to_csv('methodologies.txt',index=False, header=False)
#nbr_agile = spark.sql("SELECT  count(*)   FROM data WHERE Methodology!='NA'  AND Methodology like '%Agile%'   ")


#-----------------------------------------------------



#************different types of IDE*******************

'''ide_workers = spark.sql("SELECT DISTINCT (IDE)  FROM data WHERE IDE!='NA'  group by IDE ")

ide_workers.toPandas().to_csv('IDE.txt',index=False, header=False)'''






#************different types of WantWork Database*******************

#databases = spark.sql("SELECT DISTINCT (HaveWorkedDatabase)  FROM data WHERE HaveWorkedDatabase!='NA'  group by HaveWorkedDatabase ")

#databases.toPandas().to_csv('database.txt',index=False, header=False)
#databases.show()

'''nbr_mongodb =spark.sql("SELECT  count(*) FROM data WHERE HaveWorkedDatabase!='NA' AND HaveWorkedDatabase like '%MongoDB%'  ")
nbr_mongodb.show()
nbr_mysql =spark.sql("SELECT  count(*) FROM data WHERE HaveWorkedDatabase!='NA' AND HaveWorkedDatabase like '%MySQL%'  ")
nbr_oracle =spark.sql("SELECT  count(*) FROM data WHERE HaveWorkedDatabase!='NA' AND HaveWorkedDatabase like '%Oracle%'  ")
nbr_cassandra=spark.sql("SELECT  count(*) FROM data WHERE HaveWorkedDatabase!='NA' AND HaveWorkedDatabase like '%Cassandra%'  ")
nbr_sqlserver=spark.sql("SELECT  count(*) FROM data WHERE HaveWorkedDatabase!='NA' AND HaveWorkedDatabase like '%SQL Server%'  ")'''
#**************different types of HaveWorked Database****************





#-----------------------------------------------------




#***************different types of WantWork Platforms******************

#**************different types of HaveWorked Platforms****************


'''platforms = spark.sql("SELECT DISTINCT (HaveWorkedPlatform)  FROM data WHERE HaveWorkedPlatform!='NA'  group by HaveWorkedPlatform ")

platforms.toPandas().to_csv('platforms.txt',index=False, header=False)'''
#platforms.show()'''


#-----------------------------------------------------



#**********different types of WantWork Languages************************
#**************different types of HaveWorked  Language********************






'''programming_languages = spark.sql("SELECT DISTINCT (HaveWorkedLanguage)  FROM data WHERE HaveWorkedLanguage!='NA'  group by HaveWorkedLanguage ")

programming_languages.toPandas().to_csv('programming.txt',index=False, header=False)'''




#--------------------------------------------------------------------

'''frameworks = spark.sql("SELECT DISTINCT (HaveWorkedFramework)  FROM data WHERE HaveWorkedFramework!='NA'  group by HaveWorkedFramework ")


frameworks.toPandas().to_csv('frameworks.txt',index=False, header=False)'''





#-----------------------------------------------------



#*******************Gender****************************

#gender = spark.sql("SELECT DISTINCT(Gender) , count(*) as nbr  FROM data Where Gender !='NA' Group By Gender   ")


#gender.toPandas().to_csv('genders.txt',index=False, header=False)

'''nbr_male.toPandas().to_csv('gender.csv')'''
'''nbr_male = spark.sql("SELECT count(*) FROM data WHERE Gender like 'Male%' ")
nbr_male.show()'''

'''nbr_female = spark.sql("SELECT count(*) FROM data WHERE Gender like 'Female%' ")
nbr_female.show()'''









#*****************Salary AVG , *********************//

'''salaries = spark.sql("SELECT AVG(Salary) FROM data     ")

salaries.toPandas().to_csv('salaries.csv')'''













