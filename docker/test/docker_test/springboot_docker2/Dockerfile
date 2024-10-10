
#https://hub.docker.com/_/openjdk
#open jdk 17
FROM openjdk:17-alpine
ARG JAR_FILE=build/libs/*.jar
#build된 파일중 jar 생성(libs)

#파일 복사
COPY ${JAR_FILE} agaroup.jar
#환경 설정
ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=prod", "/agaroup.jar"]