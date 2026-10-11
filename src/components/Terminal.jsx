function Terminal() {
  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <p>sewita@cybersecurity.portfolio</p>
      </div>

      <div className="terminal-body">
        <p>
          <span className="terminal-prompt">sewita@cybersecurity.portfolio:~$</span>
          {" whoami"}
        </p>

        <p className="terminal-output">
          Sewita Ahmadi | Cybersecurity Student
        </p>

        <p>
          <span className="terminal-prompt">sewita@cybersecurity.portfolio:~$</span>
          {" interests"}
        </p>

        <p className="terminal-output">
          Network Security
          <br />
          Ethical Hacking
          <br />
          Secure Development
        </p>

        <p>
          <span className="terminal-prompt">sewita@cybersecurity.portfolio:~$</span>
          {" status"}
        </p>

        <p className="terminal-success">
          ● Learning and building every day
        </p>

        <p className="terminal-command">
          <span className="terminal-prompt">$</span>
          <span className="terminal-cursor"></span>
        </p>
      </div>
    </div>
  );
}

export default Terminal;