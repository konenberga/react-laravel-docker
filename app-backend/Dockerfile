FROM php:8.0

RUN apt-get update -y && apt-get install -y openssl zip unzip git
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN apt -yqq update
RUN apt -yqq install libxml2-dev
RUN docker-php-ext-install pdo_mysql
RUN docker-php-ext-install xml

WORKDIR /app/app-backend
COPY . .
RUN composer install

CMD php artisan key:generate

EXPOSE 8000
CMD php artisan serve --host=0.0.0.0
