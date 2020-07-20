rsync -r src/ docs/
rsync build/contracts/* docs/

git add .
git commit - "Gompile assets of github pages"
git push -u origin master