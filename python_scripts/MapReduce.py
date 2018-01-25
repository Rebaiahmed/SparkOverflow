from pyspark import SparkContext,SparkConf
from datetime import datetime

if __name__ == "__main__":

    conf = SparkConf().setAppName("Words count").setMaster("local")
    sc = SparkContext(conf=conf)
    text_file = sc.textFile("./frameworks.txt")
    counts = text_file.flatMap(lambda line: line.replace(';',' ').replace(',',' ').split(" ")) \
             .map(lambda word: (word, 1)) \
             .reduceByKey(lambda a, b: a + b)

          
    counts.saveAsTextFile("./results_frameworks")