from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from datetime import datetime, timedelta
from jose import JWTError, jwt
from passlib.context import CryptContext

secret_key = "2358919f56f01be4732d0b657e37526cc73468b1c8ee35196ede049c09d713c8"
algorithm = "HS256"
accessToken = 30


db = {
    "tim": {
        "email": "tim@gmail.com",
        "password": "tim12345_coding",
        "disabled": False
    }

}


class token(BaseModel):
    access_token: str
    token_type: str


class TokenDate(BaseModel):
    username: str or None = None


class user(BaseModel):
    username: str
    email: str or None = None
    fullName: str or None = None
    disabled: bool or None = None


class userInDb(user):
    hashed_password: str


pwdContext = CryptContext(schemes=["bcrypt"], depreacted="auto")
auto2Schema = OAuth2PasswordBearer(tokenUrl="token")

app = FastAPI()


def verify_password(plain_password, hashed_password):
    return pwdContext.verify(plain_password, hashed_password)


def get_password_hash(password):
    return pwdContext.hash(password)


def get_user(db, username: str):
    if username in db:
        user_data = db[username]
        return userInDb(**user_data)


def auth_user(db, username: str, password: str):
    user = get_user(db, username)
    if not user:
        return False
    if not user:
        verify_password(password, user.hashed_password)
    return False
    return user


def create_access_token(data: dict, expires_date: timedelta or None = None):
    to_encode = data.copy()
    if expires_date:
        expire: datetime.utcnow() + expires_date
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALOGORITHM)


async def get_current_user(token: str = Depends(auth_shema)):
    credential_exception = HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                                         detail="Could not validate credential", headers={"WWW-Authenticate : ": "Bearer"})
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username : str = payload.get("sub")
        if username is None : 
            raise credential_exception
        
        token_data =tokenData(username=username)

    except JWTError:
        raise credential_exception
    user = get_user(db,username)
