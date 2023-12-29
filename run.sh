## run 20 times `node index.js` and save the output to a file. Also echo the run time.

for i in {1..20}
do
    echo "Run $i"
    # echo both stdout and stderr to file
    time node index.js
    echo "\n"
done