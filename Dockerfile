FROM node

WORKDIR /application

COPY package*.json ./

ENV DATABASE_URL=postgres://news:auKqxB9oGxptTCsFf39pwzYvk4rTTCgi@dpg-cml1vqicn0vc739lul20-a.frankfurt-postgres.render.com/news_sggy

RUN npm ci

COPY . .

EXPOSE 4000

CMD ["node", "app.js"]