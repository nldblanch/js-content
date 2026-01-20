import { useState } from 'react';
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
    const [difficultyFilter, setDifficultyFilter] = useState('all');
    const [categoryFilter, setCategoryFilter] = useState('all');

    const results = utilityTests.map(util => ({
        ...util,
        testResults: runAllTests(util)
    }));

    // Apply filters
    const filteredResults = results.filter(util => {
        const matchesDifficulty = difficultyFilter === 'all' || util.difficulty === difficultyFilter;
        const matchesCategory = categoryFilter === 'all' ||
            (categoryFilter === 'array' && util.method.includes('.')) ||
            (categoryFilter === 'utility' && !util.method.includes('.'));
        return matchesDifficulty && matchesCategory;
    });

    const { totalTests, passedTests } = calculateProgress(filteredResults);
    const overallProgress = calculateProgress(results);

    return (
        <div className="introduction-page">
            <div className="intro-header">
                <h1>🎯 Array Iterator Challenge</h1>
                <p className="intro-subtitle">
                    Master JavaScript array methods by implementing utility functions used throughout this Task Manager app
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
                    <li>Navigate to other pages to see your functions in action!</li>
                </ol>
            </div>
            <div className="filters-section">
                <div className="filter-group">
                    <label>Difficulty:</label>
                    <button
                        className={difficultyFilter === 'all' ? 'filter-btn active' : 'filter-btn'}
                        onClick={() => setDifficultyFilter('all')}
                    >
                        All
                    </button>
                    <button
                        className={difficultyFilter === 'Easy' ? 'filter-btn active' : 'filter-btn'}
                        onClick={() => setDifficultyFilter('Easy')}
                    >
                        Easy
                    </button>
                    <button
                        className={difficultyFilter === 'Medium' ? 'filter-btn active' : 'filter-btn'}
                        onClick={() => setDifficultyFilter('Medium')}
                    >
                        Medium
                    </button>
                    <button
                        className={difficultyFilter === 'Hard' ? 'filter-btn active' : 'filter-btn'}
                        onClick={() => setDifficultyFilter('Hard')}
                    >
                        Hard
                    </button>
                </div>

                <div className="filter-group">
                    <label>Category:</label>
                    <button
                        className={categoryFilter === 'all' ? 'filter-btn active' : 'filter-btn'}
                        onClick={() => setCategoryFilter('all')}
                    >
                        All
                    </button>
                    <button
                        className={categoryFilter === 'array' ? 'filter-btn active' : 'filter-btn'}
                        onClick={() => setCategoryFilter('array')}
                    >
                        Array Methods
                    </button>
                    <button
                        className={categoryFilter === 'utility' ? 'filter-btn active' : 'filter-btn'}
                        onClick={() => setCategoryFilter('utility')}
                    >
                        Utilities
                    </button>
                </div>

                <div className="filter-results-info">
                    Showing {filteredResults.length} of {results.length} challenges • {passedTests} / {totalTests} tests passing
                </div>
            </div>

            <Modal>
                <div className="utilities-grid">
                    {filteredResults.map((util, index) => {
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
