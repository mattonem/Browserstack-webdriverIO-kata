pipeline {
    agent any
    triggers {
        cron('H 0 * * *')
        pollSCM('* * * * *')
    }
    stages {
        stage('Loading dependecy') {
            steps {
                echo 'npm install'           
                sh 'npm install' 
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'  
                browserstack(credentialsId: 'e4bfb5f8-607a-41aa-87d0-8fa493e9ca8c') {
                    sh 'npx wdio wdio.conf.js'
                }              
            }
        }
    }
     post {
        always {
            deleteDir() /* clean up our workspace */
        }
    }
 }
