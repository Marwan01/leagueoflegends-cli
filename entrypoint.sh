restart() {
    printf "League CLI crashed with exit code $?.  \nAttempting to restart"
    sleep 1
    printf "."
    sleep 1 
    printf "."
    sleep 2
    printf ".\n"
}

#number of new reads every script execution
let reads=0 
# let ok=true

# Verbose app init
init_options() {
    while true
    do
        echo "Choose an option from the list below:\n 1) Print Champion List \n 2) Enter Champion Number, Get the counters\n *) Anything else to exit interactive mode."
        read choice
        case $choice in
            1)
                node championgetter.js
                ;;
            2)
                echo "Getting champion counter"
                ;;
            *)
                echo "Exiting League CLI. Bye!"
                break
                ;;
        esac
    done
}

# Do what u gotta do
echo "Welcome to League CLI."
init_options