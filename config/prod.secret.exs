use Mix.Config

# In this file, we keep production configuration that
# you likely want to automate and keep it away from
# your version control system.
config :euler, Euler.Endpoint,
  secret_key_base: "BKUcEQFK8vozWfu3ZmzfwXrsEWi/pnU3FMTz8ljGzY+QX2yunjXQqXbfzkzvcr2z"

# Configure your database
config :euler, Euler.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "euler_prod",
  pool_size: 20
