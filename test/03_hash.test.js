var scriptutils = require('../dist/node-test/index.js');
var expect = require('chai').expect;
var fs = require('fs');
var path = require('path');

describe('Hash', function() {
	describe('Hash Folder', function () {
		beforeEach(function () {
            // tmphash
			fs.mkdirSync('tmphash');
			fs.writeFileSync('tmphash/file1.txt', 'Hello World. This is file 1.');
			fs.writeFileSync('tmphash/file2.txt', 'Hello World. This is file 2.');
			
			// tmphash2
			fs.mkdirSync('tmphash2');
			fs.writeFileSync('tmphash2/file3.txt', 'Hello World. This is file 3.');
			fs.writeFileSync('tmphash2/file4.txt', 'Hello World. This is file 4.');
			
			// tmphash3
			fs.mkdirSync('tmphash3');
			fs.writeFileSync('tmphash3/file1.txt', 'Hello World. This is file 1.');
			fs.writeFileSync('tmphash3/file2.txt', 'Hello World. This is file 2.');
			
			// tmphash4
			fs.mkdirSync('tmphash4');
			fs.writeFileSync('tmphash4/file5.txt', 'Hello World. This is file 1.');
			fs.writeFileSync('tmphash4/file6.txt', 'Hello World. This is file 2.');
			
			// tmphash5
			fs.mkdirSync('tmphash5');
			fs.writeFileSync('tmphash5/file7.txt', 'Hello World. This is file 2.');
			fs.writeFileSync('tmphash5/file8.txt', 'Hello World. This is file 1.');
			
			// tmphash6
			fs.mkdirSync('tmphash6');
			fs.writeFileSync('tmphash6/file7.txt', 'Hello World. This is file 2.');
			fs.writeFileSync('tmphash6/file8.txt', 'Hello World. This is file 1.');
			fs.mkdirSync('tmphash6/tmphash7');
			
			// tmphash7
			fs.mkdirSync('tmphash7');
		});
		afterEach(function () {
			// tmphash
			fs.readdirSync('tmphash').forEach(file => {
				fs.unlinkSync(path.join('tmphash', file));
			});
			fs.rmdirSync('tmphash');

			// tmphash2
			fs.readdirSync('tmphash2').forEach(file => {
				fs.unlinkSync(path.join('tmphash2', file));
			});
			fs.rmdirSync('tmphash2');

			// tmphash3
			fs.readdirSync('tmphash3').forEach(file => {
				fs.unlinkSync(path.join('tmphash3', file));
			});
			fs.rmdirSync('tmphash3');

			// tmphash4
			fs.readdirSync('tmphash4').forEach(file => {
				fs.unlinkSync(path.join('tmphash4', file));
			});
			fs.rmdirSync('tmphash4');
			
			// tmphash5
			fs.readdirSync('tmphash5').forEach(file => {
				fs.unlinkSync(path.join('tmphash5', file));
			});
			fs.rmdirSync('tmphash5');
			
			// tmphash6
			fs.readdirSync('tmphash6').forEach(file => {
				try {fs.unlinkSync(path.join('tmphash6', file));} catch(e) {}
			});
			fs.rmdirSync('tmphash6/tmphash7');
			fs.rmdirSync('tmphash6');
			
			// tmphash7
			fs.readdirSync('tmphash7').forEach(file => {
				fs.unlinkSync(path.join('tmphash7', file));
			});
			fs.rmdirSync('tmphash7');
		});
		
		it('Should return a string', function () {
			var hash1 = scriptutils.hashFolder('tmphash');
			expect(hash1).to.be.a('string');
		});
		it('Should return same string for the same folder', function () {
			var hash1 = scriptutils.hashFolder('tmphash');
			var hash2 = scriptutils.hashFolder('tmphash');
			expect(hash1).to.equal(hash2);
		});
		it('Should return different strings for different folders', function () {
			var hash1 = scriptutils.hashFolder('tmphash');
			var hash2 = scriptutils.hashFolder('tmphash2');
			expect(hash1).to.not.equal(hash2);
		});
		it('Should return same strings for different folder names but same contents', function () {
			var hash1 = scriptutils.hashFolder('tmphash');
			var hash2 = scriptutils.hashFolder('tmphash3');
			expect(hash1).to.equal(hash2);
		});
		it('Should return same strings for different folder names but same contents and different file names', function () {
			var hash1 = scriptutils.hashFolder('tmphash3');
			var hash2 = scriptutils.hashFolder('tmphash4');
			expect(hash1).to.equal(hash2);
		});
		it('Should return same strings for same contents but different ordered files', function () {
			var hash1 = scriptutils.hashFolder('tmphash4');
			var hash2 = scriptutils.hashFolder('tmphash5');
			expect(hash1).to.equal(hash2);
		});
		it('Should return same strings for same contents but an empty folder within directory', function () {
			var hash1 = scriptutils.hashFolder('tmphash5');
			var hash2 = scriptutils.hashFolder('tmphash6');
			expect(hash1).to.equal(hash2);
		});
		it('Should throw error if no files in directory', function () {
			try {
				expect(scriptutils.hashFolder('tmphash7')).to.throw(Error, "Directory is empty");
			} catch (e) {
				expect(e.toString()).to.include('Directory is empty');
			}
		});
		it('Should throw error if directory doesn\'t exist', function () {
			try {
				expect(scriptutils.hashFolder('invalidtmphash')).to.throw();
			} catch (e) {
				expect(e.toString()).to.include('no such file or directory, scandir \'invalidtmphash\'');
			}
		});
	}); // end "Hash Folder" describe
}); // end "Hash" describe