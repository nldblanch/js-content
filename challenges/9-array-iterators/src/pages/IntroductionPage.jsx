import Modal from '../components/Modal';
import { utilityTests } from '../constants/utilityTests';
import {
    parseCodeInText,
    runAllTests,
    getDifficultyColor,
    calculateProgress
} from '../helpers/introPageHelpers';
import '../IntroPage.css';

const IntroductionPage = () => {
    const results = utilityTests.map(util => ({
        ...util,
        testResults: runAllTests(util)
    }));

    const { totalTests, passedTests } = calculateProgress(results);
    const overallProgress = calculateProgress(results);

    return (
        <div className="introduction-page">
            <div className="intro-header">
                <h1>📋 Task Manager: Core Array Methods</h1>
                <p className="intro-subtitle">
                    Implement 7 small utilities using the core array methods, then see them working in the Task Manager page.
                </p>
                <div className="progress-summary">
                    <div className="progress-bar-container">
                        <div
                            className="progress-bar-fill"
                            style={{ width: `${(overallProgress.passedTests / overallProgress.totalTests) * 100}%` }}
                        ></div>
                    </div>
                    <p className="progress-text">
                        {overallProgress.passedTests} / {overallProgress.totalTests} tests passing ({Math.round((overallProgress.passedTests / overallProgress.totalTests) * 100)}%)
                    </p>
                </div>
            </div>

            <div className="intro-instructions">
                <h2>📚 Getting Started</h2>
                <ol>
                    <li>Open <code>src/utils.js</code> in your editor</li>
                    <li>Implement each function following the TODO comments</li>
                    <li>Watch the tests below turn green ✅ as you complete each one</li>
                    <li>Click on any function to see detailed instructions and tips</li>
                    <li>Open <strong>Task Manager</strong> in the nav to see them in action</li>
                </ol>
            </div>

            <div className="filters-section">
                <div className="filter-results-info">
                    {passedTests} / {totalTests} tests passing
                </div>
            </div>

            <Modal>
                <div className="utilities-grid">
                    {results.map((util, index) => {
                        const passedCount = util.testResults.filter(t => t.passed).length;
                        const totalCount = util.testResults.length;
                        const allPassed = passedCount === totalCount;

                        return (
                            <div key={util.name} className="utility-card">
                                <div className="utility-card-header">
                                    <div className="utility-title-row">
                                        <h3>{util.name}</h3>
                                        <span
                                            className="difficulty-badge"
                                            style={{ backgroundColor: getDifficultyColor(util.difficulty) }}
                                        >
                                            {util.difficulty}
                                        </span>
                                    </div>
                                    <p className="utility-description">{util.description}</p>
                                    <div className="utility-method">
                                        <code>{util.method}</code>
                                    </div>
                                </div>

                                <div className="test-results">
                                    {util.testResults.map((test, testIndex) => (
                                        <div key={testIndex} className="test-result">
                                            <span className={`test-icon ${test.passed ? 'passed' : 'failed'}`}>
                                                {test.passed ? '✅' : '❌'}
                                            </span>
                                            <span className="test-name">{test.name}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="test-summary">
                                    {allPassed ? (
                                        <span className="all-passed">🎉 All tests passing!</span>
                                    ) : (
                                        <span className="some-failed">{passedCount}/{totalCount} tests passing</span>
                                    )}
                                </div>

                                <Modal.Open opens={`util-${index}`}>
                                    <button className="btn-show-instructions">
                                        → View Instructions & Tips
                                    </button>
                                </Modal.Open>

                                <Modal.Window name={`util-${index}`}>
                                    <div className="instructions-modal-content">
                                        <h2>{util.name}</h2>

                                        <h4>📖 Objective</h4>
                                        <p>{util.instructions.objective}</p>

                                        <h4>💡 Hints</h4>
                                        <ul>
                                            {util.instructions.hints.map((hint, i) => (
                                                <li key={i}>{parseCodeInText(hint)}</li>
                                            ))}
                                        </ul>

                                        <h4>✨ Example Solution</h4>
                                        <pre className="code-example">
                                            <code>{util.instructions.example}</code>
                                        </pre>

                                        <h4>🔍 Tips</h4>
                                        <ul>
                                            {util.instructions.tips.map((tip, i) => (
                                                <li key={i}>{parseCodeInText(tip)}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </Modal.Window>
                            </div>
                        );
                    })}
                </div>
            </Modal>
        </div>
    );
};

export default IntroductionPage;
