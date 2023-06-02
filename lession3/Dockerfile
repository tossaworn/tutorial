FROM nginx

# Create the SSL directory
RUN mkdir -p /etc/nginx/ssl

# Generate a self-signed SSL certificate
RUN openssl req -x509 -newkey rsa:4096 -nodes -keyout /etc/nginx/ssl/key.pem -out /etc/nginx/ssl/cert.pem -days 365 \
    -subj "/C=US/ST=State/L=City/O=Organization/CN=localhost"
# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/index.html