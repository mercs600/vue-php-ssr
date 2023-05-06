FROM php:8.0-fpm
RUN apt-get update && \
    apt-get install -y \
        libzip-dev \
        zip \
        unzip \
        git \
        && docker-php-ext-install pdo_mysql zip

RUN chown -R www-data:www-data /var/www/html
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs
WORKDIR /var/www/html
