FROM eclipse-temurin:17-jre-alpine
RUN apk update && apk upgrade
WORKDIR /app
COPY target/java-17-maven-project-1.0.0.jar .
CMD ["java","-jar","java-17-maven-project-1.0.0.jar"]
