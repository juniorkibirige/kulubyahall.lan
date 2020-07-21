rm sha256_verify.txt
find . -type f ! -path "*sha*" ! -path "*vscode*" ! -path "*fontawesome*" ! -path "*.log" ! -path "*git*" ! -path "*kul_ssl*" ! -path "*tests*" -exec sha256sum {} \; >> sha256_verify.txt
