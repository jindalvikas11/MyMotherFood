ng build --prod --base-href /public/
rm -rf ../services/public
cp -R dist/ ../services/public/
