FROM node:22-alpine AS base

WORKDIR /app

# Убедитесь, что у вас установлены все нужные пакеты
RUN apk add --no-cache libc6-compat

# Копируем только package.json и yarn.lock для установки зависимостей
COPY package.json yarn.lock* ./

# Устанавливаем зависимости
RUN yarn install --frozen-lockfile

# Копируем весь проект
COPY . .

CMD ["yarn", "dev"]
