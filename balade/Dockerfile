FROM openjdk:8
EXPOSE 8089
#ADD /target/balade-0.0.1-SNAPSHOT.jar.original balade.jar
ADD target/balade-0.0.1-SNAPSHOT.jar balade.jar
ENTRYPOINT ["java", "-jar", "balade.jar"]