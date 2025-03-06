# 기본 이미지로 파이썬 3.8을 사용
FROM python:3.8-slim

# 작업 디렉토리 설정
WORKDIR /app

# 애플리케이션 파일 복사
COPY ./source/ /app

# 필요한 패키지 설치
RUN pip install --no-cache-dir flask

# 애플리케이션 실행
CMD ["python", "app.py"]
