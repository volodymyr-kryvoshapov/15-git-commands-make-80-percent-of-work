# Delete a file / directory from a Git repository

```
git rm -r --cached myDirectoryName
```

`-r` - recursive flag if you removing directory

Then

```
git commit -m "deleted myDirectoryName from git"
git push origin branch_name
```
