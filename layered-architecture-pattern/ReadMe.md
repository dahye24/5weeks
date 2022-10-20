# npm 패키지 설치
npm install

# Sequelize를 이용하여 DB 생성
npx sequelize db:create

# Sequelize를 이용하여 테이블 및 데이터 마이그레이션
npx sequelize db:migrate


컨트롤러(Controller)

3계층 아키텍처 패턴에서는 프레젠테이션 계층(Presentation Layer)이라고 표현
사용자(클라이언트)가 서버에 요청(Request)를 하게되면 가장 먼저 만나게 되는 계층

- **하위 계층(서비스 계층, 저장소 계층)**에서 발생하는 **예외(Exception)**를  처리 합니다.
- 클라이언트가 전달한 데이터에 대해 **유효성을 검증**하는 기능을 수행합니다.
- 클라이언트의 **요청**을 처리한 후 서버에서 처리된 결과를 **반환**

