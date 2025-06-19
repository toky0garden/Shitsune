from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


engine = create_async_engine('mysql+aiomysql://root@localhost:3306/Y_twit', echo=True)


AsyncSessionLocal = sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False
)

Base = declarative_base()


async def get_database():
    async with AsyncSessionLocal() as db:
        try:
            yield db
        finally:
            await db.close()