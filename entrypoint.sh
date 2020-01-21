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
        echo "Choose an option from the list below:\n 1) Info \n 2) Counter\n 3) Build \n *) Anything else to exit interactive mode."
        read choice
        case $choice in
            1)
                echo "Welcome to League of Legends CLI1111."
                ;;
            2)
                echo "Welcome to League of Legends CLI2222."
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
node championgetter.js