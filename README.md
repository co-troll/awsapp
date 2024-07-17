# AWS
## 포트포워딩
## 프로시 설정 nginx
## CI/CD githubActions 



## aws ec2 프로젝트 업로드
> git init 초기화 하고
> git remote add origin [주소]
> git pull origin main
> 유저 권한 인증
> 유저 이름 : 깃헙 이름
> 유저 비밀번호 : 깃헙 프로필 -> 설정 -> developer settings

## nodejs를 가상 서버에 설치
> sudo apt-get update
> sudo apt-get install -y build-essential # 기본프로그램 설치
> sudo apt-get install curl
> curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash --
`노드를 설치`
> sudo apt-get install -y nodejs


### 포트 포워딩
> 네트워크에서 외부의 포트로 요청을 보내면 재 매핑해서 다른 포트로 요청을 받을수 잇도록
> 공유기나 가상 서버에 적용을 할수 있따.
> 예) 80번 포트로 요처을 보냈지만 3000포트로 재매핑해서 응답을 주는것
```sh
sudo iptables -t nat -A PREROUTING -i eth0 -p tcp -dport 80 -j REDIRECT --to-port 3000
```