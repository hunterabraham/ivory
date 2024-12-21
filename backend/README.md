## Setting up the DB

createdb ivory_dev
psql ivory_dev

> CREATE USER ivory WITH PASSWORD 'ivory';
> ALTER ROLE ivory SET client_encoding TO 'utf8';
> ALTER ROLE ivory SET default_transaction_isolation TO 'read committed';
> ALTER ROLE ivory SET timezone TO 'UTC';
> GRANT ALL ON DATABASE ivory_dev TO ivory;
> ALTER DATABASE ivory_dev OWNER TO ivory;
> GRANT USAGE, CREATE ON SCHEMA public TO ivory;
> GRANT USAGE ON SCHEMA public TO ivory;
> ALTER ROLE ivory SUPERUSER;
